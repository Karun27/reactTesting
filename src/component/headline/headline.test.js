import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import { findByAttr, checkProps} from './../../Utils';


const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;

};
describe('Headline Component', () =>{
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test HEader',
                desc: 'Test Desc',
                temArr: [{
                    fName: 'Test',
                    lName: 'Testing',
                    email:'test@test.com',
                    age: 20,
                    onlineStatus: false
                }]
            };

            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined();
        });

    });


    describe('Have props', ()=> {
        let wrapper;
            beforeEach(() => {
                const props = {
                    header: 'Test Header',
                    desc: 'Test Description'
                };
                wrapper = setUp(props);
          });

          it('Should render without errors' , () => {
              const component = findByAttr(wrapper, 'HeadlineComponent');
              expect(component.length).toBe(1);

          })

          it('Should render a H1', () => {
              const h1= findByAttr(wrapper, 'header');
              expect(h1.length).toBe(1);
          })

          it('Should render a desc', () => {
            const desc= findByAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have NO props', () => {

        let wrapper; 
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })

    });
});
