import { useForm } from 'react-hook-form'

export default function Formulario() {
    const {
        reset,
        watch,
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log('data: ', data);
    })

    return(
        <div className='flex items-center gap-2 justify-center'>
            <form onSubmit={onSubmit}>
                <h1>React Hook Form</h1>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        { ...register('name', {
                            required: {
                                value: true,
                                message: "Nombre es requerido"
                            },
                            minLength: {
                                value: 2,
                                message: "Minimo 2 careacteres"
                            },
                            maxLength: {
                                value: 30,
                                message: "Maximo 30 careacteres"
                            },
                        })}
                    />
                    { errors.name && <span>{errors.name.message}</span> }
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        { ...register('email', {
                            required: {
                                value: true,
                                message: 'Campo requerido'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Correo no valido'
                            }
                        })}
                    />
                    { errors.email && <span>{errors.email.message}</span> }
                </div>
                <div>
                    <label htmlFor="description">Descripcion</label>
                    <textarea
                        className='w-full'
                        { ...register('description', { ...register('description', {
                            required: true,
                            minLength: 2,
                            maxLength: 100,
                        })}) }
                    >
                        
                    </textarea>
                    { errors.description && <span>Campo incompleto</span> }
                </div>
                <div className="flex justify-between gap-2">
                    <div className="w-1/2">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            { ...register('password', {
                            required: {
                                value: true,
                                message: 'Campo incompleto',
                            },
                            minLength: {
                                value: 6,
                                message: "Minimo 6 careacteres"
                            },
                        })}
                        placeholder="* * * * * * * * *"
                        />
                        { errors.email && <span>{errors.email.message}</span> }
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="confirmarPassword">Confirmar contraseña</label>
                        <input
                            type="password"
                            { ...register('confirmarPassword', {
                            required: {
                                value: true,
                                message: 'Campo incompleto',
                            },
                            validate: value => value === watch('password') || ('Los passwords no son iguales')
                            
                        })}
                        placeholder="* * * * * * * * *"
                        />
                        { errors.confirmarPassword && <span>{errors.confirmarPassword.message}</span> }
                    </div>
                </div>
                <div className="flex justify-between gap-2">
                    <div className="w-1/2">
                        <label htmlFor="fecha">Fecha nacimiento</label>
                        <input
                            type="date"
                            { ...register('fecha', {required: true}) }
                            />
                        { errors.fecha && <span>Campo incompleto</span> }
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="genero">Genero</label>
                        <select
                            type="select"
                            className="w-full"
                            { ...register('genero', {
                                required: {
                                    value: true,
                                    message: "Campo incompleto"
                                },
                                validate: (value) => {
                                    const fechaNacimiento = new Date(value)
                                    const fechaActual = new Date()
                                    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
                                    return edad >= 18 || "Debe ser mayor de edad"
                                }
                            })}
                        >
                            <option value="" hidden>Select...</option>
                            <option value="man">Hombre</option>
                            <option value="woman">Mujer</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between">
                    <label className="w-1/2" htmlFor="foto">Foto</label>
                    <input
                        type="file"
                        { ...register('foto') }
                        className="w-full bg-light"
                    />
                </div>
                <hr></hr>
                <div>
                    <div className="flex justify-center gap-1">
                        <input
                            type="checkbox"
                            {
                                ...register('termino',
                                {
                                    required: {
                                        value: true,
                                        message: 'Debe aceptar terminos y condiciones.'
                                    }
                                })
                            }
                        />
                        <label htmlFor="termino">Acepto terminos y condiciones</label>
                    </div>
                    { errors.termino && <span>{errors.termino.message}</span> }
                </div>
                <div className='flex w-full gap-2'>
                    <button className='w-1/2' type="submit">Enviar</button>
                    <button className='w-1/2 bg-dark' type="button" onClick={() => { reset() }}>Limpiar</button>
                </div>
            </form>
            <pre>
                {JSON.stringify(watch(), null, 2)}
            </pre>
        </div>
    );
}