import './styles.css'
import shiba_image from './shiba_icon.png'
import left_arrow from './left_arrow.svg'

export const App = () => {
    return <>
        <h1>React TypeScript Webpack Starter Template</h1>
        <img src={shiba_image} alt="Shiba Image" width="300" height="200" />
        <img src={left_arrow} alt="Shiba Image" width="300" height="200" />
    </>
}