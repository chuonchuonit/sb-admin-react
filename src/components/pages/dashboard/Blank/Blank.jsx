import React, { PropTypes, Component } from 'react';
import {PageHeader} from 'react-bootstrap';
import NProgress from 'nProgress';

var Blank = React.createClass({
  componentDidMount: function(){
    NProgress.done();
  },

  render: function() {
    return (

    	<div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <PageHeader>Blank</PageHeader>
            </div>
          </div>
        </div>
    	</div>
      
    );
  }

});

export default Blank;