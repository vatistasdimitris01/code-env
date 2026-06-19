import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export type TemplateKind =
  | 'notification'
  | 'chat'
  | 'social'
  | 'alert'
  | 'product'
  | 'reminder'
  | 'cta';

type TemplateSpec = {
  id: string;
  kind: TemplateKind;
  eyebrow: string;
  title: string;
  body: string;
  accent: string;
  icon: string;
  cta?: string;
};

export const templates: TemplateSpec[] = [
  {id: 'notification-popup', kind: 'notification', eyebrow: 'New activity', title: 'Your campaign is live', body: 'Hyperframes finished publishing all template videos.', accent: '#7c3aed', icon: '🔔'},
  {id: 'chat-message', kind: 'chat', eyebrow: 'Ava from Support', title: 'Need help choosing a plan?', body: 'Reply here and we will recommend the best fit in two minutes.', accent: '#0ea5e9', icon: '💬'},
  {id: 'social-proof', kind: 'social', eyebrow: 'Social proof', title: '2,418 teams joined this week', body: 'Creators are launching polished product updates faster.', accent: '#22c55e', icon: '✨'},
  {id: 'alert-banner', kind: 'alert', eyebrow: 'Important alert', title: 'Usage limit approaching', body: 'Upgrade before Friday to keep automated exports running.', accent: '#f97316', icon: '⚠️'},
  {id: 'product-update', kind: 'product', eyebrow: 'Product update', title: 'MP4 export queue is ready', body: 'Batch-render notification, chat, alert, CTA, and reminder clips.', accent: '#ec4899', icon: '🚀'},
  {id: 'reminder-card', kind: 'reminder', eyebrow: 'Reminder', title: 'Record your launch intro', body: 'Your storyboard is saved and ready for the next step.', accent: '#14b8a6', icon: '⏰'},
  {id: 'call-to-action', kind: 'cta', eyebrow: 'Limited offer', title: 'Create your first video today', body: 'Pick a template, customize the copy, and export as MP4.', accent: '#2563eb', icon: '▶️', cta: 'Start exporting'},
];

const cardBase: React.CSSProperties = {
  width: 1180,
  borderRadius: 42,
  padding: 54,
  background: 'rgba(255,255,255,0.94)',
  boxShadow: '0 34px 90px rgba(15, 23, 42, 0.26)',
  color: '#101827',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
};

export const TemplateVideo: React.FC<{spec: TemplateSpec}> = ({spec}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const entrance = spring({frame, fps, config: {damping: 16, stiffness: 120}});
  const pulse = interpolate(frame, [0, durationInFrames - 1], [0, 1]);
  const y = interpolate(entrance, [0, 1], [90, 0]);
  const opacity = interpolate(frame, [0, 18], [0, 1], {extrapolateRight: 'clamp'});
  const exit = interpolate(frame, [durationInFrames - 18, durationInFrames - 1], [1, 0], {extrapolateLeft: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        background: `radial-gradient(circle at 25% 20%, ${spec.accent}55, transparent 28%), linear-gradient(135deg, #0f172a, #111827 52%, #020617)`,
        overflow: 'hidden',
      }}
    >
      <div style={{position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)', backgroundSize: '64px 64px', opacity: 0.4}} />
      <div style={{...cardBase, transform: `translateY(${y}px) scale(${0.96 + entrance * 0.04})`, opacity: opacity * exit}}>
        <div style={{display: 'flex', gap: 34, alignItems: 'center'}}>
          <div style={{width: 132, height: 132, borderRadius: 34, background: spec.accent, display: 'grid', placeItems: 'center', fontSize: 62, boxShadow: `0 22px 50px ${spec.accent}66`}}>{spec.icon}</div>
          <div style={{flex: 1}}>
            <div style={{color: spec.accent, fontSize: 28, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase'}}>{spec.eyebrow}</div>
            <div style={{fontSize: 70, fontWeight: 900, lineHeight: 1.02, marginTop: 14}}>{spec.title}</div>
            <div style={{fontSize: 34, lineHeight: 1.32, color: '#475569', marginTop: 22, maxWidth: 870}}>{spec.body}</div>
          </div>
        </div>
        <div style={{height: 16, borderRadius: 999, background: '#e2e8f0', marginTop: 46, overflow: 'hidden'}}>
          <div style={{height: '100%', width: `${Math.max(8, pulse * 100)}%`, background: spec.accent, borderRadius: 999}} />
        </div>
        {spec.cta ? <div style={{display: 'inline-flex', marginTop: 34, padding: '20px 32px', borderRadius: 999, background: spec.accent, color: 'white', fontSize: 30, fontWeight: 800}}>{spec.cta}</div> : null}
      </div>
    </AbsoluteFill>
  );
};
