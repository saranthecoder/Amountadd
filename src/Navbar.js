import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const amount = useSelector(state => state.amount)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">State Bank of SARAN</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/">Features</a>
                        <a className="nav-link" href="/">Pricing</a>
                    </div>
                </div>
                <div>
                    <button class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">Your balance:{amount}</button>
                </div>
            </div>
        </nav>
    )
}