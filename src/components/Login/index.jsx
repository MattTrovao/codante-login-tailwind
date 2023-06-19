import { useState } from 'react'
import bgImg from '../../assets/bg.jpg'


export default function Login() {
  const [screen, setScreen] = useState('default')

  const [page, setPage] = useState('Faça seu login')

  const gradientDefault = 'bg-gradient-to-br from-blue-400 via-indigo-500 to-indigo-900 transition-all ease-in-out duration-700 hover:from-indigo-500 hover:via-indigo hover:to-indigo-900'
  const fieldClass = 'flex flex-col gap-2 '
  const labelClass = 'text-white text-base'
  const inputClass = 'p-2 rounded-xl  placeholder:opacity-60 text-white background-transparent bg-transparent border-2 border-blue-600 transition-all ease-in-out duration-700 outline-none focus:shadow-md focus:shadow-indigo-700/50 focus:border-blue-900 active:shadow-md active:shadow-indigo-700/50 active:border-blue-900 hover:shadow-md hover:shadow-indigo-700/50 hover:border-blue-900'

  function resetScreen(e) {
    e.preventDefault()
    setPage('Faça seu login')
    setScreen('default')
  }

  function newPassword(e) {
    e.preventDefault()
    setPage('Resetar senha')
    setScreen('password')
  }

  function newAccount(e) {
    e.preventDefault()
    setPage('Criar conta')
    setScreen('account')
  }

  return (
    <main className="h-screen w-screen flex justify-center items-center bg-gray-950">
      <section className="w-[70vw] lg:pl-10 rounded-xl bg-stone-900 flex flex-col lg:flex-row justify-between gap-x-6 overflow-hidden shadow-xl shadow-indigo-300/20 ">
        <div
          className='flex flex-col gap-8 py-10 px-5'
        >
          <h1
            className='text-5xl tracking-widest text-white font-semibold uppercase'
          >
            {page}
            <span className={`w-[10px] h-[10px] rounded-full inline-block ml-1 ${gradientDefault}`} />
          </h1>
          <div className='flex flex-col gap-6'>
            {screen == 'default' && (
              <>
                <div className={fieldClass}>
                  <label htmlFor='email' className={labelClass}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='email@dominio.com'
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className={fieldClass}>
                    <label htmlFor="password" className={labelClass}>Senha</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder='********'
                      className={inputClass}
                    />
                  </div>
                  <a
                    href="#"
                    onClick={newPassword}
                    className='text-red-300 text-sm text-end transition-all ease-in-out duration-700 hover:text-white'
                  >
                    Esqueci a senha
                  </a>
                </div>

                <button className={`py-2 rounded-xl text-white text-base font-semibold border-0 ${gradientDefault} `}>
                  Entrar
                </button>

                <a
                  href="#"
                  onClick={newAccount}
                  className='text-sm text-blue-500 text-center opacity-80 transition-all ease-in-out duration-700 hover:opacity-100 hover:text-white'
                >
                  Criar Conta
                </a>
              </>
            )}

            {screen == 'password' && (
              <>
                <div className={fieldClass}>
                  <label htmlFor='newPass' className={labelClass}>
                    Nova Senha
                  </label>
                  <input
                    type="password"
                    name="newPass"
                    id="newPass"
                    placeholder='********'
                    className={inputClass}
                  />
                </div>

                <div className={`mb-3 ${fieldClass}`}>
                  <label htmlFor="password" className={labelClass}>Repetir Senha</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='********'
                    className={inputClass}
                  />
                </div>

                <button onClick={resetScreen} className={`py-2 rounded-xl text-white text-base font-semibold border-0 ${gradientDefault} `}>
                  Salvar
                </button>
              </>
            )}

            {screen == 'account' && (
              <>
                <div className={fieldClass}>
                  <label htmlFor='email' className={labelClass}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='email@dominio.com'
                    className={inputClass}
                  />
                </div>

                <div className={fieldClass}>
                  <label htmlFor="password" className={labelClass}>Senha</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='********'
                    className={inputClass}
                  />
                </div>

                <div className={fieldClass}>
                  <label htmlFor="password2" className={labelClass}>Repetir Senha</label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder='********'
                    className={inputClass}
                  />
                </div>

                <button className={`py-2 rounded-xl text-white text-base font-semibold border-0 ${gradientDefault} `} onClick={resetScreen}>
                  Cadastre-se
                </button>
              </>
            )}
          </div>
        </div>

        <div
          className='
            lg:w-[40%] relative
            before:block before:z-10 before:absolute before:inset-0 before:bg-gradient-to-b lg:before:bg-gradient-to-r before:from-stone-900  lg:before:w-[50%] before:h-[40%] lg:before:h-full
          '
        >
          <img
            src={bgImg}
            alt="Background Image"
            draggable="false"
            className='object-cover w-full h-full'
          />
        </div>

      </section>
    </main>
  )
}