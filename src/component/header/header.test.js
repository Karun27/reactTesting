import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findByAttr} from './../../Utils'

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
};

describe('Header Component', () =>{

    let component;
    beforeEach(() => {
        component = setUp();
    })
    it('Should render without errors', () => {
    const wrapper = findByAttr(component,'headerComponent');
    expect(wrapper.length).toBe(1);
});

it('Should render a logo', ()=> {
    // console.log(component.debug());
    const logo = findByAttr(component,'logoImg');
    expect(logo.length).toBe(1);
});
})