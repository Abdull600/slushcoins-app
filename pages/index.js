import Nav from '../components/nav'
import Hero from '../components/hero'
import Dashboard from '../components/dashboard'
import NewLetter from '../components/newsletter'
import Cards from '../components/cards'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Dashboard />
      <NewLetter />
      <Cards />
      <Footer />
    </div>
  )
}
