import React from 'react'

import { Footer } from './Footer'
import { Header } from './header'

export const Master = (props) => {
    return (
        <div>
            <Header />
            <props.Rcf></props.Rcf>
            <Footer />
        </div>
    )
}
