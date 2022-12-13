import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header'
import Nav from './components/nav'
import Block from './components/blockFooter'
import LastBlock from './components/blockFooterLast'
import Plays from './pages/plays'
import Home from './pages'
import ChildrenStudio from './pages/children-studio'
import HistoryTheathre from './components/historyTheathre'
import Poster from './components/poster/poster'
import News from './components/news/news'
import OneOageNews from './components/news/oneNewsPage'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/plays' element={<Plays />} />
          <Route path='/children-studio' element={<ChildrenStudio />} />
          <Route path='/theatre-history' element={<HistoryTheathre />} />
          <Route path='/posters' element={<Poster />} />
          <Route path='/news' element={<News />} />
          <Route exact path='/news/*' element={<OneOageNews />} />
        </Routes>
        <footer>
          <Block />
          <LastBlock />
        </footer>
      </Router>
    </div>
  )
}

export default App
