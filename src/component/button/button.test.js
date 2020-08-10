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
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            };
                wrapper = shallow(<ShareButton {...props} />)
        });
        it('Should Render a button', () => {
            const button = findByAttr(wrapper, 'buttonComponent') ;
            expect(button.length).toBe(1);
        });
        it('Should emit callback on click event', () => {

            const button = findByAttr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });
});