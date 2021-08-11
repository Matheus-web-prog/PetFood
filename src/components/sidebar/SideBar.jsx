import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Dock from 'react-dock'
import Product from '../product/list/Product'
import './sidebar.css'

const SideBar = () => { 
    const { cart } = useSelector((state) => state.shop)
    const [opened, setOpen] = useState(false)

    useEffect (() => {
        window.addEventListener('openCart', () => {
            setOpen(true)
        })
    }, [])

    return (
        <Dock 
            position="right" 
            isVisible={opened}
            onVisibleChange={(visible) => {setOpen(visible)}}
        >
            <div className="container-fluid h-100 pt-4 sidebar">
                <h5>Minha Sacola ({cart.length})</h5>
                <div className="row products">
                    {cart.map((p) => (
                        <Product  product={p}/>
                    ))}
                </div>
                <div className="row align-items-end footer">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <b className="d-inline-block">Total:</b>
                        <h3 className="d-inline-block">R$ 90,00</h3>
                    </div>
                    <button className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center">Finalizar Compra</button>
                </div>
            </div>
        </Dock>
    )

}

export default SideBar