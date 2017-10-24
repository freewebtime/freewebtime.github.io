import * as React from 'react';
import onClickOutside from 'react-onclickoutside';
import { IVector2 } from '../api/IVector2';
import TrashIcon from './TrashIcon';

export interface ISplineProps {
  mousePos: IVector2,
  start: IVector2,
  end: IVector2,
}
class Spline extends React.Component<ISplineProps> {
    state = {
      selected: false,
      position: { x: 0, y: 0 }
    }

    handleClick(e: any) {
      this.setState({
        selected: !this.state.selected,
        position: this.props.mousePos
      });

      // if (this.props.onClick) {
      //   this.props.onClick(e);
      // }
    }

    handleClickOutside(e: any) {
      this.setState({selected: false});

      // if (this.props.onClickOutside) {
      //   this.props.onClickOutside(e);
      // }
    }

    handleRemove(e: any) {
      this.setState({selected: false});

      // if (this.props.onRemove) {
      //   this.props.onRemove(e);
      // }
    }

    render() {
        let {selected, position} = this.state;

        let {start, end} = this.props;

        let dist = this.distance([start.x,start.y],[end.x, end.y]);

        let pathString = this.bezierCurve(start.x,                  // start x
                                          start.y,                  // start y
                                          start.x + dist * 0.25,    // cp1 x
                                          start.y,                  // cp1 y
                                          end.x - dist * 0.75 ,     // cp2 x
                                          end.y,                    // cp2 y
                                          end.x ,                   // end x
                                          end.y);                   // end y

        let className = 'connector' + (selected ? ' selected' : '');

        return (
                <g className={'svg-spline'}>
                <circle cx={start.x} cy={start.y} r="3"  fill="#337ab7" className={className}/>
                <circle cx={end.x} cy={end.y} r="3"  fill="#9191A8" className={className}/>
                <path className="connector-click-area" d={pathString} onClick={(e) => {this.handleClick(e)}} />
                <path className={className} d={pathString} onClick={(e) => {this.handleClick(e)}} />
                { selected 
                  ? <TrashIcon position={position} onClick={(e: any) => {this.handleRemove(e)}} />
                  : null 
                }
                </g>


        );
    }

    bezierCurve(a:number,b:number,cp1x:number,cp1y:number,cp2x:number,cp2y:number,x:number,y:number) {
        return `M${a},${b} C${cp1x},${cp1y} ${cp2x},${cp2y}  ${x},${y}`;
    }

    distance(a: [number], b: [number]) {
        return Math.sqrt( (b[0] - a[0]) * (b[0] - a[0]) + (b[1] - a[1]) * (b[1] - a[1]) );
    }
}

export default onClickOutside(Spline)