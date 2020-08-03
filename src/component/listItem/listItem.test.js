import React from 'react';
import {shallow} from 'enzyme';
import {findByAttr, checkProps} from './../../Utils';
import ListItem from './index';
import { compose } from 'redux';

describe('List Item Component', () => {
    describe('Checking proptypes', () => {
                it('Should NOT throw a warning', ()=> {
                    const expectedProps = {
                        title: 'Example Title',
                        desc: 'Random',
                    };

                    const propsError = checkProps(ListItem, expectedProps);
                    expect(propsError).toBeUndefined();

                });
    });
    describe('Component Render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Something',
                desc: 'Random'
            };
            wrapper = shallow(<ListItem {...props} />);
        });
        it('Should render without erros',() => {
            const Component = findByAttr(wrapper, 'listItemComponent');
            expect(Component.length).toBe(1);
        });

        it('Should render Title without erros',() => {
            const Component = findByAttr(wrapper, 'componentTitle');
            expect(Component.length).toBe(1);
        });

        it('Should render desc without erros',() => {
            const Component = findByAttr(wrapper, 'componentDesc');
            expect(Component.length).toBe(1);
        });
        

    });
    describe('Should not render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
               
                desc: 'Random'
            };
            wrapper = shallow(<ListItem {...props} />);
        });
        
        it('Component is not rendered', ()=> {
            const component = findByAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });

    });
});