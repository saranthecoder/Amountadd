import React from 'react'
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';

export const Shop = () => {
    const dispatch = useDispatch();

    const {withDrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
    return (
        <div>
            <h2>Deposit / WithDraw the Money</h2>
            {/* <button className='btn btn-primary' onClick={()=>dispatch(actionCreators.depositMoney(100))}>+ </button>
            Update Balance
            <button className='btn btn-primary' onClick={()=>dispatch(actionCreators.withDrawMoney(100))}>- </button> */}
            <button className='btn btn-primary' onClick={()=>depositMoney(100)}>+ </button>
            Update Balance
            <button className='btn btn-primary' onClick={()=>withDrawMoney(100)}>- </button>
        
        
        </div>
    )
}