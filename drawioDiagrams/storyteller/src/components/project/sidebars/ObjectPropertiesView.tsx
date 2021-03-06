import * as React from 'react';
import { IProjectViewState } from '../ProjectView';
import { IAppState } from '../../../api/IAppState';

export class ObjectPropertiesView extends React.Component<{appState: IAppState, pvState: IProjectViewState}> {
  handleHeaderClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    this.props.pvState.closeRightSidebar();
  }
  
  render() {
    return (
      <div className={'object-properties-container container-vertical'}>
        <div className={'object-properties-header'} onClick={this.handleHeaderClick}>
          PROPERTIES
        </div>
        <div className={'object-properties-content'}>
          Object properties
        </div>  
      </div>      
    );
  }
}




