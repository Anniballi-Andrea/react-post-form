import { useState } from "react"
import axios from "axios"
const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'


function App() {

  const initialFormData = {
    author: '',
    title: '',
    body: '',
    public: false
  }

  const [formData, setFormData] = useState(initialFormData)
  const [message, setMessage] = useState({
    text: null,
    type: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)

    axios.post(endpoint, { formData }, {
      headers: {
        'contente-Type': 'aplication/json'
      }
    })
      .then(response => {
        console.log(response)
        setFormData(initialFormData)
        setMessage({ text: 'success', type: 'success' })

      })
      .catch(err => {

        setFormData(initialFormData)
        setMessage({ text: err.message, type: 'danger' })
      })

  }




  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <form className=" pt-3 px-3" onSubmit={handleSubmit}>
                {message && <p className={`text-${message.type}`}> {message.text}</p>}
                <div>
                  <input
                    type="text " className=" info mt-2" placeholder="Insert your name"
                    name="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })} />
                </div>
                <div>
                  <input type="text " className="info mt-2" placeholder="Insert tiket title"
                    name="title"
                    value={formData.title}

                    onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                </div>
                <div>
                  <input type="text" className="form-control mt-2" placeholder="Insert your tiket message"
                    name='body'
                    value={formData.body}
                    onChange={(e) => setFormData({ ...formData, body: e.target.value })} />
                </div>
                <div>
                  <input type="checkbox" className="form-check-input mt-2"
                    name="public"
                    checked={formData.public}
                    onChange={(e) => setFormData({ ...formData, public: e.target.checked })}
                  /> public
                </div>

                <button type="submit" className="btn btn-primary mt-2"
                >Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
