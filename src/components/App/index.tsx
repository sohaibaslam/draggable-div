import React, {FC, useState} from 'react';
import Draggable from "react-draggable";
import './styles.css'

const App: FC = () => {
  const [xPosition, setXPosition] = useState(10);
  const [yPosition, setYPosition] = useState(160);

  const handlePositionUpdate = (event: any) => {
    // Need to make sure offset is valid
    const offSetX = event.offsetX < event.x ? event.offsetX: 0
    const offSetY = event.offsetY < event.y ? event.offsetY: 0

    setXPosition(event.x - offSetX)
    setYPosition(event.y - offSetY)
  }

  const handleXInput = (event: any) => {
    setXPosition(event.target.value)
  }

  const handleYInput = (event: any) => {
    setYPosition(event.target.value)
  }

  return (
    <>
      <div className={'input-axis'}>
        <h1>A draggable box</h1>
        <input type='number' title={'X-axis'} value={xPosition} onChange={handleXInput}/>
        <input type='number' title={'Y-axis'} value={yPosition} onChange={handleYInput}/>
      </div>
      <Draggable
        handle=".handle"
        position={{x: xPosition, y: yPosition}}
        onDrag={(event) => {handlePositionUpdate(event)}}
      >
        <div className="handle draggable" />
      </Draggable>
    </>
  )
}

export default App;