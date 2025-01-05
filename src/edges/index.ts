// import type { Edge, EdgeTypes } from '@xyflow/react';

// export const initialEdges: Edge[] = [
//   { id: 'a->c', source: 'a', target: 'c', animated: true },
//   { id: 'b->d', source: 'b', target: 'd' },
//   { id: 'c->d', source: 'c', target: 'd', animated: true },
// ];

// export const edgeTypes = {
//   // Add your custom edge types here!
// } satisfies EdgeTypes;


import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: 'start',
    target: 'welcome',
    animated: true,
    style: { stroke: '#6c63ff', strokeWidth: 2  },
  },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
