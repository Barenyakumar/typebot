// import type { Node, BuiltInNode } from '@xyflow/react';

// export type PlaceholderNodeData = {
//     label: string;
//     placeholder: string;
//   };

// export type TextInputNodeData = {
//     label: string;
//     placeholder: string;
//   };
  
//   export type EmailInputNodeData = {
//     label: string;
//     placeholder: string;
//   };

// export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
// export type AppNode = BuiltInNode | PositionLoggerNode | Node<TextInputNodeData, 'text'> | Node<EmailInputNodeData, 'email'> | Node<{ label: string }, 'position-logger'> | Node<{ label: string }, 'default'> | Node<PlaceholderNodeData, 'default'>;


import type { Node } from '@xyflow/react';

export type PlaceholderNodeData = {
  label: string;
  placeholders: { label: string; placeholder: string }[];
};


// export type AppNode = Node<PlaceholderNodeData, 'default'>;

export type PositionLoggerNode = {
    label: string;
  };
  
  export type AppNode =
    | Node<PlaceholderNodeData, 'default'>
    | Node<PositionLoggerNode, 'positionLogger'>;
  