// import type { NodeTypes } from '@xyflow/react';

// import { PositionLoggerNode } from './PositionLoggerNode';
// import { AppNode } from './types';

// export const initialNodes: AppNode[] = [
//   { id: 'a', type: 'input', position: { x: 0, y: 0 }, data: { label: 'wire' } },
//   {
//     id: 'b',
//     type: 'position-logger',
//     position: { x: -100, y: 100 },
//     data: { label: 'drag me!' },
//   },
//   { id: 'c', position: { x: 100, y: 100 }, data: { label: 'your ideas' } },
//   {
//     id: 'd',
//     type: 'output',
//     position: { x: 0, y: 200 },
//     data: { label: 'with React Flow' },
//   },
// ];

// export const nodeTypes = {
//   'position-logger': PositionLoggerNode,
//   // Add any of your custom nodes here!
// } satisfies NodeTypes;

// import type { NodeTypes } from "@xyflow/react";
// import { AppNode } from "./types";
// import { Handle, Position } from "@xyflow/react";
// // const PlaceholderNode = ({ data }: { data: { label: string; placeholder: string } }) => {
// //   return (
// //     <div className="react-flow__node-default">
// //       <div style={{
// //         position: 'absolute',
// //         top: 10,
// //         right: 10,
// //         width: 10,
// //         height: 10,
// //         backgroundColor: 'lightgray',
// //       }}>
// //         <label>{data.label}</label>
// //         {data.label === 'Empty' ? (
// //           <div style={{ color: '#ccc', fontStyle: 'italic' }}>Drag a component here</div>
// //         ) : (
// //           <input
// //             type={data.label === 'Email Input' ? 'email' : 'text'}
// //             placeholder={data.placeholder}
// //           />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // const TextInputNode = ({
// //   data,
// // }: {
// //   data: { label: string; placeholder: string };
// // }) => {
// //   return (
// //     <div className="react-flow__node-default">
// //       <label>{data.label || "Text Input"}</label>
// //       <input type="text" placeholder={data.placeholder || "Enter text..."} />
// //     </div>
// //   );
// // };

// // const EmailInputNode = ({
// //   data,
// // }: {
// //   data: { label: string; placeholder: string };
// // }) => {
// //   return (
// //     <div className="react-flow__node-default">
// //       <label>{data.label || "Email Input"}</label>
// //       <input type="email" placeholder={data.placeholder || "Enter email..."} />
// //     </div>
// //   );
// // };

// const PlaceholderNode = ({
//   data,
// }: {
//   data: { label: string; placeholder: string };
// }) => {
//   return (
//     <div
//       className="react-flow__node-default"
//       style={{
//         padding: '20px', 
//         borderRadius: '5px',
//         minWidth: '100px', 
//         minHeight: '50px', 
//       }}
//     >
//       <Handle
//         type="target"
//         position={Position.Top}
//         style={{
//           background: "#555",
//           width: 10,
//           height: 10,
//           borderRadius: "50%",
//         }}
//       />
//       <label>{data.label}</label>
//       {data.label === "Empty" ? (
//         <div style={{ color: "#ccc", fontStyle: "italic" }}>
//           Drag a component here
//         </div>
//       ) : (
//         <input
//           type={data.label === "Text Input" ? "text" : "email"}
//           placeholder={data.placeholder}
//           style={{ marginTop: "5px" }}
//         />
//       )}
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         style={{
//           background: "#555",
//           width: 10,
//           height: 10,
//           borderRadius: "50%",
//         }}
//       />
//     </div>
//   );
// };

// const TextInputNode = ({
//   data,
// }: {
//   data: { label: string; placeholder: string };
// }) => {
//   return (
//     <div
//       className="react-flow__node-default"
//       style={{ padding: "10px", borderRadius: "5px" }}
//     >
//       <Handle
//         type="target"
//         position={Position.Top}
//         style={{
//           background: "#555",
//           width: 10,
//           height: 10,
//           borderRadius: "50%",
//         }}
//       />
//       <label>{data.label || "Text Input"}</label>
//       <input
//         type="text"
//         placeholder={data.placeholder || "Enter text..."}
//         style={{ marginTop: "5px" }}
//       />
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         style={{
//           background: "#555",
//           width: 10,
//           height: 10,
//           borderRadius: "50%",
//         }}
//       />
//     </div>
//   );
// };

// const EmailInputNode = ({
//   data,
// }: {
//   data: { label: string; placeholder: string };
// }) => {
//   return (
//     <div
//       className="react-flow__node-default"
//       style={{ padding: "10px", borderRadius: "5px" }}
//     >
//       <Handle
//         type="target"
//         position={Position.Top}
//         style={{
//           background: "#555",
//           width: 10,
//           height: 10,
//           borderRadius: "50%",
//         }}
//       />
//       <label>{data.label || "Email Input"}</label>
//       <input
//         type="email"
//         placeholder={data.placeholder || "Enter email..."}
//         style={{ marginTop: "5px" }}
//       />
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         style={{
//           background: "#555",
//           width: 10,
//           height: 10,
//           borderRadius: "50%",
//         }}
//       />
//     </div>
//   );
// };

// export const initialNodes: AppNode[] = [
//   {
//     id: "start",
//     type: "default",
//     position: { x: 100, y: 100 },
//     data: { label: "Start" },
//   },
//   {
//     id: "welcome",
//     type: "default",
//     position: { x: 300, y: 300 },
//     data: { label: "Welcome\nWelcome to AA (Awesome Agency)" },
//   },
//   {
//     id: "placeholder",
//     type: "default",
//     position: { x: 500, y: 500 },
//     data: { label: "Empty", placeholder: "" },
//   },
// ];

// export const nodeTypes = {
//   default: PlaceholderNode,
//   text: TextInputNode,
//   email: EmailInputNode,
// } satisfies NodeTypes;


// import type { NodeTypes } from '@xyflow/react';
// import { AppNode } from './types';
// import { Handle, Position } from '@xyflow/react';

// const PlaceholderNode = ({ data }: { data: { label: string; placeholders: { label: string; placeholder: string }[] } }) => {
//   return (
//     <div
//       className="react-flow__node-default"
//       style={{
//         padding: '20px', // Increased padding for more space
//         borderRadius: '5px',
//         minWidth: '200px', // Increased box width
//         minHeight: '120px', // Increased box height
//       }}
//     >
//       <Handle
//         type="target"
//         position={Position.Top}
//         style={{ background: '#555', width: 10, height: 10, borderRadius: '50%' }}
//       />
//       <label>{data.label}</label>
//       {data.placeholders.map((placeholder, index) => (
//         <input
//           key={index}
//           type={placeholder.label.toLowerCase().includes('text') ? 'text' :
//                placeholder.label.toLowerCase().includes('email') ? 'email' :
//                placeholder.label.toLowerCase().includes('number') ? 'number' : 'url'}
//           placeholder={placeholder.placeholder}
//           style={{ marginTop: '5px', width: '100%' }}
//         />
//       ))}
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         style={{ background: '#555', width: 10, height: 10, borderRadius: '50%' }}
//       />
//     </div>
//   );
// };

// export const initialNodes: AppNode[] = [
//   {
//     id: 'placeholder',
//     type: 'default',
//     position: { x: 200, y: 200 },
//     data: { label: 'Empty', placeholders: [] },
//   },
//   {
//     id: 'start',
//     type: 'default',
//     position: { x: 100, y: 100 },
//     data: { label: 'Start', placeholders: [] },
//   },
//   {
//     id: 'welcome',
//     type: 'default',
//     position: { x: 300, y: 300 },
//     data: { label: 'Welcome\nWelcome to AA (Awesome Agency)', placeholders: [] },
//   },
// ];

// export const nodeTypes = {
//   default: PlaceholderNode,
// } satisfies NodeTypes;


import type { NodeTypes } from '@xyflow/react';
import { AppNode } from './types';
import { Handle, Position } from '@xyflow/react';

const PlaceholderNode = ({ data }: { data: { label: string; placeholders: { label: string; placeholder: string }[] } }) => {
  return (
    <div
      className="react-flow__node-default"
      style={{
        padding: '20px', // Increased padding for more space
        borderRadius: '5px',
        minWidth: '200px', // Increased box width
        minHeight: '120px', // Increased box height
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#555', width: 10, height: 10, borderRadius: '50%' }}
      />
      <label>{data.label}</label>
      {data.placeholders.map((placeholder, index) => (
        <input
          key={index}
          type={placeholder.label.toLowerCase().includes('text') ? 'text' :
               placeholder.label.toLowerCase().includes('email') ? 'email' :
               placeholder.label.toLowerCase().includes('number') ? 'number' : 'url'}
          placeholder={placeholder.placeholder}
          style={{ marginTop: '5px', width: '100%' }}
        />
      ))}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#555', width: 10, height: 10, borderRadius: '50%' }}
      />
    </div>
  );
};

const PositionLoggerNode = ({ positionAbsoluteX, positionAbsoluteY, data }: { positionAbsoluteX: number, positionAbsoluteY: number, data: { label: string } }) => {
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;

  return (
    <div className="react-flow__node-default">
      {data.label && <div>{data.label}</div>}

      <div>
        Position: {x}, {y}
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export const initialNodes: AppNode[] = [
  {
    id: 'placeholder',
    type: 'default',
    position: { x: 200, y: 200 },
    data: { label: 'Empty', placeholders: [] },
  },
  {
    id: 'start',
    type: 'default',
    position: { x: 100, y: 100 },
    data: { label: 'Start', placeholders: [] },
  },
  {
    id: 'welcome',
    type: 'default',
    position: { x: 300, y: 300 },
    data: { label: 'Welcome\nWelcome to AA (Awesome Agency)', placeholders: [] },
  },
];

export const nodeTypes = {
  default: PlaceholderNode,
  positionLogger: PositionLoggerNode,
} satisfies NodeTypes;