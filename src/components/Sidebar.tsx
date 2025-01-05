import React from 'react';

const Sidebar = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      style={{
        width: '200px',
        background: '#f0f0f0',
        padding: '10px',
        borderRight: '1px solid #ccc',
      }}
    >
      <h4>Drag Components</h4>
      <div
        onDragStart={(e) => onDragStart(e, 'text')}
        draggable
        style={{ margin: '10px', padding: '10px', background: '#ddd', cursor: 'grab' }}
      >
        Text Input
      </div>
      <div
        onDragStart={(e) => onDragStart(e, 'email')}
        draggable
        style={{ margin: '10px', padding: '10px', background: '#ddd', cursor: 'grab' }}
      >
        Email Input
      </div>
      <div
        onDragStart={(e) => onDragStart(e, 'number')}
        draggable
        style={{ margin: '10px', padding: '10px', background: '#ddd', cursor: 'grab' }}
      >
        Number Input
      </div>
      <div
        onDragStart={(e) => onDragStart(e, 'website')}
        draggable
        style={{ margin: '10px', padding: '10px', background: '#ddd', cursor: 'grab' }}
      >
        Website Input
      </div>
    </div>
  );
};

export default Sidebar;
