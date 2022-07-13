const __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const expressImport = __importDefault(require('express'))

const app = (0, expressImport.default)()
const port = process.env.PORT
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server')
})
app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`)
})
