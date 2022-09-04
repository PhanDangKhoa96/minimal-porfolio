import Contact from "./components/Contact"
import CopyRight from "./components/CopyRight"
import Hero from "./components/Hero"
import Introduction from "./components/Introduction"
import Project from "./components/Project"
import AnimatedCursor from "react-animated-cursor"

function App() {

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color='235, 236, 237'
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={1.2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Hero />
      <Project />
      <Introduction />
      <Contact />
      <CopyRight />
    </>
  )
}

export default App
