// import { useCallback } from 'react';
// import {
//   ReactFlow,
//   Background,
//   Controls,
//   MiniMap,
//   addEdge,
//   useNodesState,
//   useEdgesState,
//   type OnConnect,
// } from '@xyflow/react';

// import '@xyflow/react/dist/style.css';

// import { initialNodes, nodeTypes } from './nodes';
// import { initialEdges, edgeTypes } from './edges';

// export default function App() {
//   const [nodes, , onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
//   const onConnect: OnConnect = useCallback(
//     (connection) => setEdges((edges) => addEdge(connection, edges)),
//     [setEdges]
//   );

//   return (
//     <ReactFlow
//       nodes={nodes}
//       nodeTypes={nodeTypes}
//       onNodesChange={onNodesChange}
//       edges={edges}
//       edgeTypes={edgeTypes}
//       onEdgesChange={onEdgesChange}
//       onConnect={onConnect}
//       fitView
//     >
//       <Background />
//       <MiniMap />
//       <Controls />
//     </ReactFlow>
//   );
// }


// import { useCallback } from 'react';
// import {
//   ReactFlow,
//   Background,
//   Controls,
//   MiniMap,
//   addEdge,
//   useNodesState,
//   useEdgesState,
//   type OnConnect,
// } from '@xyflow/react';

// import '@xyflow/react/dist/style.css';

// import { initialNodes, nodeTypes } from './nodes';
// import { initialEdges, edgeTypes } from './edges';
// import Sidebar from './components/Sidebar';
// import { AppNode } from './nodes/types';

// export default function App() {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect: OnConnect = useCallback(
//     (connection) => setEdges((eds) => addEdge(connection, eds)),
//     [setEdges]
//   );

//   // const onDrop = (event: React.DragEvent) => {
//   //   event.preventDefault();
//   //   const nodeType = event.dataTransfer.getData('application/reactflow');
//   //   const position = { x: event.clientX, y: event.clientY };

//   //   const newNode = {
//   //     id: `${nodes.length + 1}`,
//   //     type: nodeType,
//   //     position,
//   //     data: { label: `${nodeType} Node`, placeholder: '' },
//   //   };

//   //   setNodes((nds) => nds.concat(newNode));
//   // };

//   // const onDrop = (event: React.DragEvent) => {
//   //   event.preventDefault();
//   //   const nodeType = event.dataTransfer.getData('application/reactflow') as 'text' | 'email';
//   //   const position = { x: event.clientX, y: event.clientY };
  
//   //   const newNode: AppNode = {
//   //     id: `${nodes.length + 1}`,
//   //     type: nodeType,
//   //     position,
//   //     data: {
//   //       label: `${nodeType === 'text' ? 'Text Input' : 'Email Input'}`,
//   //       placeholder: `${nodeType === 'text' ? 'Enter text...' : 'Enter email...'}`,
//   //     },
//   //   };
  
//   //   setNodes((nds) => nds.concat(newNode));
//   // };

  
  
//   const onDragOver = (event: React.DragEvent) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <Sidebar />
//       <div style={{ flex: 1 }}>
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           nodeTypes={nodeTypes}
//           edgeTypes={edgeTypes}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//           onConnect={onConnect}
//           onDrop={onDrop}
//           onDragOver={onDragOver}
//           fitView
//         >
//           <Background />
//           <MiniMap />
//           <Controls />
//         </ReactFlow>
//       </div>
//     </div>
//   );
// }

// import { useCallback } from 'react';
// import {
//   ReactFlow,
//   Background,
//   Controls,
//   MiniMap,
//   addEdge,
//   useNodesState,
//   useEdgesState,
//   type OnConnect,
// } from '@xyflow/react';

// import '@xyflow/react/dist/style.css';

// import { initialNodes, nodeTypes } from './nodes';
// import { initialEdges, edgeTypes } from './edges';
// import { AppNode } from './nodes/types';
// import Sidebar from './components/Sidebar';

// export default function App() {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   // const onConnect: OnConnect = useCallback(
//   //   (connection) => setEdges((eds) => addEdge(connection, eds)),
//   //   [setEdges]
//   // );
//   const onConnect: OnConnect = useCallback(
//     (connection) =>
//       setEdges((eds) =>
//         addEdge(
//           {
//             ...connection,
//             animated: true, // Optional: Makes the edge animated
//             style: { stroke: '#6c63ff' }, // Optional: Customize edge style
//           },
//           eds
//         )
//       ),
//     [setEdges]
//   );
  

//   // const onDrop = (event: React.DragEvent) => {
//   //   event.preventDefault();
//   //   const nodeType = event.dataTransfer.getData('application/reactflow') as 'text' | 'email';
  
//   //   setNodes((nds) =>
//   //     nds.map((node) => {
//   //       if (node.id === 'placeholder') {
//   //         return {
//   //           ...node,
//   //           type: 'default',
//   //           data: {
//   //             label: nodeType === 'text' ? 'Text Input' : 'Email Input',
//   //             placeholder: nodeType === 'text' ? 'Enter text...' : 'Type your email...',
//   //           },
//   //         } as AppNode;
//   //       }
//   //       return node;
//   //     })
//   //   );
//   // };
  
//   const onDrop = (event: React.DragEvent) => {
//     event.preventDefault();
//     const nodeType = event.dataTransfer.getData('application/reactflow') as 'text' | 'email';
  
//     const newNode: AppNode = {
//       id: `${nodes.length + 1}`,
//       type: 'default',
//       position: {
//         x: event.clientX - event.currentTarget.getBoundingClientRect().x,
//         y: event.clientY - event.currentTarget.getBoundingClientRect().y,
//       },
//       data: {
//         label: nodeType === 'text' ? 'Text Input' : 'Email Input',
//         placeholder: nodeType === 'text' ? 'Enter text...' : 'Type your email...',
//       },
//     };
  
//     setNodes((nds) => nds.concat(newNode));
//   };
  

//   const onDragOver = (event: React.DragEvent) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <Sidebar />
//       <div style={{ flex: 1 }}>
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           nodeTypes={nodeTypes}
//           edgeTypes={edgeTypes}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//           onConnect={onConnect}
//           onDrop={onDrop}
//           onDragOver={onDragOver}
//           fitView
//           connectionLineStyle={{ stroke: '#ddd', strokeWidth: 2 }}
          
//         >
//           <Background />
//           <MiniMap />
//           <Controls />
//         </ReactFlow>
//       </div>
//     </div>
//   );
// }

import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  // Handle,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import { AppNode } from './nodes/types';
import Sidebar from './components/Sidebar';

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            animated: true, // Optional: Makes the edge animated
            style: { stroke: '#6c63ff' }, // Optional: Customize edge style
          },
          eds
        )
      ),
    [setEdges]
  );

  // const onDrop = (event: React.DragEvent) => {
  //   event.preventDefault();
  //   const nodeType = event.dataTransfer.getData('application/reactflow') as 'text' | 'email';

  //   const newNode: AppNode = {
  //     id: `${nodes.length + 1}`,
  //     type: 'default',
  //     position: {
  //       x: event.clientX - event.currentTarget.getBoundingClientRect().x,
  //       y: event.clientY - event.currentTarget.getBoundingClientRect().y,
  //     },
  //     data: {
  //       label: nodeType === 'text' ? 'Text Input' : 'Email Input',
  //       placeholder: nodeType === 'text' ? 'Enter text...' : 'Type your email...',
  //     },
  //   };

  //   setNodes((nds) => nds.concat(newNode));
  // };

  // const onDrop = (event: React.DragEvent) => {
  //   event.preventDefault();
  //   const nodeType = event.dataTransfer.getData('application/reactflow') as 'text' | 'email' | 'number' | 'website';
  //   const targetNodeId = event.dataTransfer.getData('targetNode');

  //   if (targetNodeId) {
  //     setNodes((nds) =>
  //       nds.map((node) => {
  //         if (node.id === targetNodeId) {
  //           const newPlaceholder = {
  //             label: nodeType === 'text' ? 'Text Input' :
  //                    nodeType === 'email' ? 'Email Input' :
  //                    nodeType === 'number' ? 'Number Input' : 'Website Input',
  //             placeholder:
  //               nodeType === 'text'
  //                 ? 'Enter text...'
  //                 : nodeType === 'email'
  //                 ? 'Enter email...'
  //                 : nodeType === 'number'
  //                 ? 'Enter number...'
  //                 : 'Enter website...',
  //           };
  //           return {
  //             ...node,
  //             data: {
  //               ...node.data,
  //               placeholders: [...(node.data.placeholders || []), newPlaceholder],
  //             },
  //           };
  //         }
  //         return node;
  //       })
  //     );
  //   } else {
  //     const newNode: AppNode = {
  //       id: `${nodes.length + 1}`,
  //       type: 'default',
  //       position: {
  //         x: event.clientX - event.currentTarget.getBoundingClientRect().x,
  //         y: event.clientY - event.currentTarget.getBoundingClientRect().y,
  //       },
  //       data: {
  //         label: nodeType === 'text' ? 'Text Input' : 'Email Input',
  //         placeholders: [
  //           {
  //             label: nodeType === 'text' ? 'Text Input' :
  //                    nodeType === 'email' ? 'Email Input' :
  //                    nodeType === 'number' ? 'Number Input' : 'Website Input',
  //             placeholder:
  //               nodeType === 'text'
  //                 ? 'Enter text...'
  //                 : nodeType === 'email'
  //                 ? 'Enter email...'
  //                 : nodeType === 'number'
  //                 ? 'Enter number...'
  //                 : 'Enter website...',
  //           },
  //         ],
  //       },
  //     };

  //     setNodes((nds) => nds.concat(newNode));
  //   }
  // };

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const nodeType = event.dataTransfer.getData('application/reactflow') as 'text' | 'email' | 'number' | 'website';
    const targetNodeId = event.dataTransfer.getData('targetNode');

    if (targetNodeId) {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === targetNodeId) {
            const newPlaceholder = {
              label: nodeType === 'text' ? 'Text Input' :
                     nodeType === 'email' ? 'Email Input' :
                     nodeType === 'number' ? 'Number Input' : 'Website Input',
              placeholder:
                nodeType === 'text'
                  ? 'Enter text...'
                  : nodeType === 'email'
                  ? 'Enter email...'
                  : nodeType === 'number'
                  ? 'Enter number...'
                  : 'Enter website...',
            };
            return {
              ...node,
              data: {
                ...node.data,
                placeholders: [...(node.data.placeholders || []), newPlaceholder],
              },
            };
          }
          return node;
        })
      );
    } else {
      const newNode: AppNode = {
        id: `${nodes.length + 1}`,
        type: 'default',
        position: {
          x: event.clientX - event.currentTarget.getBoundingClientRect().x,
          y: event.clientY - event.currentTarget.getBoundingClientRect().y,
        },
        data: {
          label: nodeType === 'text'
            ? 'Text Input'
            : nodeType === 'email'
            ? 'Email Input'
            : nodeType === 'number'
            ? 'Number Input'
            : 'Website Input',
          placeholders: [
            {
              label: nodeType === 'text'
                ? 'Text Input'
                : nodeType === 'email'
                ? 'Email Input'
                : nodeType === 'number'
                ? 'Number Input'
                : 'Website Input',
              placeholder:
                nodeType === 'text'
                  ? 'Enter text...'
                  : nodeType === 'email'
                  ? 'Enter email...'
                  : nodeType === 'number'
                  ? 'Enter number...'
                  : 'Enter website...',
            },
          ],
        },
      };

      setNodes((nds) => nds.concat(newNode));
    }
  };


  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, width: '200px'}}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          connectionLineStyle={{ stroke: '#ddd', strokeWidth: 2 }}
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}