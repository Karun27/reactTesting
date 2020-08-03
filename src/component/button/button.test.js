import React from 'react';
import {findByAttr, checkProps} from  './../../Utils';
import ShareButton from './index';
import {shallow} from 'enzyme';

describe('Shared Button Component', () => {
    describe('Checking Proptypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(ShareButton, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            }
                wrapper = shallow(<ShareButton />)
        });
        it('Should Render a button', () => {
            const button = findByAttr(wrapper, 'buttonComponent') ;
            expect(button.length).toBe(1);
        })
    });
});