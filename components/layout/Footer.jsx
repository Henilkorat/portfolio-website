'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Footer() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch('https://formspree.io/f/xyzjraoo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ email: values.email }),
        })

        if (res.ok) {
          toast.success('Subscribed successfully!')
          resetForm()
        } else {
          toast.error('Something went wrong!')
        }
      } catch (err) {
        toast.error('Failed to subscribe. Try again.')
      }
    },
  })

  return (
    <footer id='about' className="bg-[#1d1d1d] text-white px-4 py-10 md:py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand and Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="min-w-10 min-h-10 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
              HK
            </div>
            <h1 className="text-2xl font-semibold">Henil Korat</h1>
          </div>
          <p className="text-gray-300 text-sm font-normal ">
            A dedicated frontend developer crafting responsive, user-centric interfaces. Let's build something exceptional together.
          </p>
          {/* Social Links (SVG) */}
          <div className="flex gap-4 mt-8">
            {/* GitHub */}
            <a href="https://github.com/HenilKorat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" fill="white" viewBox="0 0 50 50">
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/henil-korat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" fill="white" viewBox="0 0 50 50">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="https://x.com/HenilKorat72932" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" fill="white" viewBox="0 0 50 50">
                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer">Resume</a></li>
            </ul>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <span>henilkorat96@gmail.com</span>

            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">Let's Discuss</h3>
          <form
            onSubmit={formik.handleSubmit}
            className="flex items-center gap-2 bg-white rounded-full px-3 py-2"
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="flex-1 outline-none px-2 text-black text-sm"
            />
            <button type="submit" className="bg-orange-400 p-2 rounded-full text-white hover:bg-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' viewBox="0 0 24 24" id="send">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
              </svg>
            </button>
          </form>
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-400 text-xs mt-1">{formik.errors.email}</p>
          )}
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Henil Korat. All rights reserved.
      </div>
    </footer>
  )
}
