import "./App.css"
import Header from "./layouts/header/Header"
import Footer from "./layouts/footer/Footer"
import Routing from "./routes/Routing"
import Sidebar from "./layouts/sidebar/Sidebar"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main_">
        <Sidebar />
        <div className="content">
          <Routing />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
