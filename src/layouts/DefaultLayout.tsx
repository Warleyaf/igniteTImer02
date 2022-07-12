import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      {/* Esse outlet meio que vai posicionar minhas páginas dentro do meu layouit default */}
      <Outlet />
    </div>
  )
}
