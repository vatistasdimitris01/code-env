import {registerRoot} from 'remotion';
import {Composition} from 'remotion';
import React from 'react';
import {TemplateVideo, templates} from './templates';

const Root: React.FC = () => (
  <>
    {templates.map((spec) => (
      <Composition
        key={spec.id}
        id={spec.id}
        component={TemplateVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{spec}}
      />
    ))}
  </>
);

registerRoot(Root);
