import './styles.css'
import shiba_image from './shiba_icon.png'
import left_arrow from './left_arrow.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
    const x = 2

    return (
        <>
            <h1>
                React TypeScript Webpack Starter Template {process.env.name}{' '}
            </h1>
            <img
                src={shiba_image}
                alt="Shiba Inu Dog"
                width="300"
                height="200"
            />
            <img
                src={left_arrow}
                alt="Shiba Inu Dog"
                width="300"
                height="200"
            />
            <ClickCounter />
        </>
    )
}
