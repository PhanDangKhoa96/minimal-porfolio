import React from 'react'

const Contact = () => {
    return (
        <section className="container">
            <div className="text-center w-full mb-28 lg:mb-40">
                <h2 className="mb-20 lg:mb-28">Contact</h2>
                <form className="grid gap-y-10 max-w-3xl mx-auto" action="mailto:pldkhoa96.work@gmail.com" method="post" encType="text/plain">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea rows={4} placeholder="Message" required />

                    <button type="submit" className="text-xl justify-self-center uppercase border rounded-lg px-4 py-3 border-dark-silver mt-10 hover:text-white hover:border-white transition duration-300">Send</button>
                </form>
            </div>

            <div className="text-center w-full">
                <h2 className="mb-20 lg:mb-28">Let's be internet BFFs</h2>
                <div className="text-[60px] flex justify-center gap-x-4">
                    <a href="https://www.linkedin.com/in/phan-khoa-b5820311a/" target="_blank" rel="noopener noreferrer" className="hover:text-[#999] transition duration-300">
                        <i className="ri-linkedin-box-fill"></i>
                    </a>
                    <a href="https://github.com/PhanDangKhoa96" target="_blank" rel="noopener noreferrer" className="hover:text-[#999] transition duration-300">
                        <i className="ri-github-fill"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact