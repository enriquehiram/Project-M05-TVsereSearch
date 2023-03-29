import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import About from '../pages/About'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* Params: Sirven para pasar datos dinamicos en una url */}
      <Route path='/algo' element={<Detail />} />
      <Route path='/About' element={<About />} />
    </Routes>
  )
}
export default RoutesIndex
