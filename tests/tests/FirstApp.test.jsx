import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('pruebas en FirstApp', () => {
    test('debe ser match', () => {


        render(<FirstApp />)
    })
})