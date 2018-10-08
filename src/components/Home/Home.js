import React, { Component } from 'react';
import axios from 'axios';
import './Home.scss';
import './toastr.css';

const toastr =require('toastr');
class Home extends Component {
    constructor() {
        super();
        this.state = {
            understanding: '',
            isPosttEmpty: true
        }
    }
    handleUnderstanding = (e) => {
        let value = String(e.target.value).trim();
        this.setState({
            understanding: e.target.value,
            isPosttEmpty: value ? false : true
        });
    }

    sendUnderstanding = () => {
        axios.post('/understanding', {
            understanding: this.state.understanding
        })
            .then(() => {
                this.setState({
                    understanding: '',
                    isPosttEmpty: true
                });
                toastr.success('Response duly noted!!!');
                this.refs.understanding.value = '';
            })
            .catch(function (error) {
                toastr.error(error);
            });
    }
    render() {
        return (
            <div className='container capture-understanding d-flex justify-content-center'>
                <div className='wrapper'>
                    <div className="card">
                        <div className="card-block">
                            <form className="understanding-form" action="/understanding" method='POST'>
                                <div className="form-group col-lg-12 understanding-form__textaread-wrapper">
                                    <textarea ref="understanding" autoCorrect="true" className="form-control" id="understanding" name="understanding" rows="6" onInput={this.handleUnderstanding} placeholder="what is your understanding on Node.js"></textarea>
                                </div>
                                <div className="form-group col-lg-12 d-flex justify-content-center align-items-center">
                                    <div className="btn-group mr-2" role="group" aria-label="Basic example">
                                        <button type="button" disabled={this.state.isPosttEmpty} className="btn btn-primary btn-lg" onClick={this.sendUnderstanding}>Post</button>
                                    </div>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="reset" className="btn btn-secondary btn-lg">Clear</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;