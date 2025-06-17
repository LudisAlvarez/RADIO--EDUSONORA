"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Radio,
  School,
  Users,
  Clock,
  Mic,
  Music,
  BookOpen,
  Award,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Play,
  Pause,
  Square,
  ArrowLeft,
} from "lucide-react"
import { useState } from "react"

export default function RadioWebsite() {
  const programasPrincipales = [
    {
      nombre: "EduNoti",
      tipo: "Noticiero",
      horario: "7:00 AM - 7:30 AM",
      descripcion:
        "Noticiero educativo que informa sobre acontecimientos locales, nacionales e internacionales con enfoque pedagógico y análisis crítico para la comunidad estudiantil.",
      dias: "Lunes a Viernes",
      imagen: "/images/edunoti-logo.png",
    },
    {
      nombre: "Fronteras Del Tiempo",
      tipo: "Radionovela",
      horario: "8:00 PM - 8:30 PM",
      descripcion:
        "Radionovela original que transporta a los oyentes a través de diferentes épocas históricas, combinando entretenimiento con aprendizaje histórico y cultural.",
      dias: "Lunes, Miércoles y Viernes",
      imagen: "/images/fronteras-tiempo-logo.jpg",
    },
    {
      nombre: "Estilo Libre",
      tipo: "Entretenimiento",
      horario: "3:00 PM - 4:00 PM",
      descripcion:
        "Programa de entretenimiento juvenil con música actual, juegos, concursos, entrevistas y espacios de participación libre para toda la comunidad estudiantil.",
      dias: "Martes y Jueves",
      imagen: "/images/estilo-libre-logo.jpg",
    },
  ]

  const programasSecundarios = [
    {
      nombre: "Arranca la Semana",
      descripcion:
        "Programa que da inicio a la semana escolar con noticias educativas, efemérides, motivación y temas de interés general para toda la comunidad.",
      horario: "Lunes 6:00 AM - 6:30 AM",
    },
    {
      nombre: "Voces del Saber",
      descripcion:
        "Espacio donde los docentes comparten conocimientos de manera clara y didáctica sobre distintas áreas del saber.",
      horario: "Miércoles 2:00 PM - 2:30 PM",
    },
    {
      nombre: "El Rincón de la Lectura",
      descripcion:
        "Programa dedicado a la lectura en voz alta, cuentos, relatos y actividades literarias para fomentar el gusto por la lectura.",
      horario: "Viernes 10:00 AM - 10:30 AM",
    },
    {
      nombre: "Ciencia al Aire",
      descripcion:
        "Un viaje fascinante por el mundo de la ciencia con datos curiosos, experimentos y explicaciones accesibles.",
      horario: "Martes 11:00 AM - 11:30 AM",
    },
    {
      nombre: "EducArte",
      descripcion:
        "Programa cultural que promueve el arte, la música, el teatro y la creatividad como herramientas educativas.",
      horario: "Jueves 4:00 PM - 4:30 PM",
    },
    {
      nombre: "Historias con Historia",
      descripcion:
        "Programa que relata hechos históricos de forma amena, con narraciones, entrevistas y dramatizaciones.",
      horario: "Sábado 9:00 AM - 9:30 AM",
    },
  ]

  // Información detallada de cada programa
  const programasDetallados = {
    EduNoti: {
      nombre: "EduNoti",
      categoria: "Noticiero",
      horario: "Lunes a Viernes 7:00 - 7:30 AM",
      descripcion:
        "Noticiero educativo que informa sobre acontecimientos locales, nacionales e internacionales con enfoque pedagógico y análisis crítico.",
      objetivos: [
        "Informar sobre noticias relevantes para la comunidad educativa",
        "Desarrollar pensamiento crítico en los estudiantes",
        "Promover la participación ciudadana responsable",
        "Conectar eventos globales con el contexto local",
      ],
      jingle:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EduNoti%20final%20%28online-audio-converter.com%29%20%281%29-5oRgRgtiCmIF1i7X74hYfj5lIoJ2mZ.mp3",
      imagen: "/images/edunoti-logo.png",
    },
    "Arranca la Semana": {
      nombre: "Arranca la Semana",
      categoria: "Motivacional",
      horario: "Lunes 6:00 - 7:00 AM",
      descripcion:
        "Programa que da inicio a la semana escolar con noticias educativas, efemérides, motivación y temas de interés general para toda la comunidad.",
      objetivos: [
        "Motivar a la comunidad educativa para iniciar la semana",
        "Compartir efemérides y fechas importantes",
        "Promover valores institucionales",
        "Crear un ambiente positivo para el aprendizaje",
      ],
      jingle:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Arranca%20la%20semana%20Mezcla%201%20%28online-audio-converter.com%29-Hs07gOlF9Yrlw1lVlwQKC6xG6bDAg4.mp3",
      imagen: null,
    },
    "Fronteras Del Tiempo": {
      nombre: "Fronteras Del Tiempo",
      categoria: "Radionovela",
      horario: "Lunes, Miércoles y Viernes 8:00 - 8:30 PM",
      descripcion:
        "Radionovela original que transporta a los oyentes a través de diferentes épocas históricas, combinando entretenimiento con aprendizaje.",
      objetivos: [
        "Enseñar historia de manera entretenida",
        "Desarrollar la imaginación y creatividad",
        "Promover el interés por el patrimonio cultural",
        "Fortalecer la identidad histórica regional",
      ],
      jingle:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fronteras%20del%20tiempo%20Mezcla%201%20%28online-audio-converter.com%29-1dhx3CfltGCxZBvTb6WaZMnofyj646.mp3",
      imagen: "/images/fronteras-tiempo-logo.jpg",
    },
    "Estilo Libre": {
      nombre: "Estilo Libre",
      categoria: "Entretenimiento",
      horario: "Martes y Jueves 3:00 - 4:00 PM",
      descripcion:
        "Programa de entretenimiento juvenil con música actual, juegos, concursos, entrevistas y espacios de participación libre.",
      objetivos: [
        "Brindar entretenimiento sano para los jóvenes",
        "Promover talentos estudiantiles",
        "Crear espacios de participación juvenil",
        "Fortalecer la identidad cultural juvenil",
      ],
      jingle:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Estilo%20Libre%20Prog%20Entretenimiento%20%281%29%20%28online-audio-converter.com%29%20%281%29-DZRFGi8OiQWQzG49dP5qZCB1Uila4i.mp3",
      imagen: "/images/estilo-libre-logo.jpg",
    },
    "Voces del Saber": {
      nombre: "Voces del Saber",
      categoria: "Educativo",
      horario: "Miércoles 2:00 - 2:30 PM",
      descripcion:
        "Espacio donde los docentes comparten conocimientos de manera clara y didáctica sobre distintas áreas del saber.",
      objetivos: [
        "Compartir conocimientos especializados",
        "Apoyar el proceso de aprendizaje",
        "Promover la investigación educativa",
        "Fortalecer la relación docente-estudiante",
      ],
      jingle:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Voces%20del%20saber%20Mezcla%201%20%28online-audio-converter.com%29-85Hw0xzPw8Fc4e4S4Hq7aE6cdvA3cC.mp3",
      imagen: null,
    },
    "Ciencia al Aire": {
      nombre: "Ciencia al Aire",
      categoria: "Educativo",
      horario: "Martes 11:00 - 11:30 AM",
      descripcion:
        "Un viaje fascinante por el mundo de la ciencia con datos curiosos, experimentos y explicaciones accesibles.",
      objetivos: [
        "Despertar el interés por las ciencias",
        "Explicar conceptos científicos de forma sencilla",
        "Promover la investigación científica",
        "Conectar la ciencia con la vida cotidiana",
      ],
      jingle:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Ciencia%20al%20aire_mezcla%20%28online-audio-converter.com%29-jsLWUXhDdien1wTpTFqyrqp9O1z4HR.mp3",
      imagen: null,
    },
    "El Rincón de la Lectura": {
      nombre: "El Rincón de la Lectura",
      categoria: "Literario",
      horario: "Viernes 10:00 - 10:30 AM",
      descripcion:
        "Programa dedicado a la lectura en voz alta, cuentos, relatos y actividades literarias para fomentar el gusto por la lectura.",
      objetivos: [
        "Fomentar el hábito de la lectura",
        "Desarrollar habilidades comunicativas",
        "Promover la literatura regional y nacional",
        "Estimular la creatividad literaria",
      ],
      jingle:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Rinc%C3%B3n%20de%20la%20lectura_mezcla%20%28online-audio-converter.com%29-VeLaz11Qm2p6UgSrBwS51y8eH0oWn8.mp3",
      imagen: null,
    },
    EducArte: {
      nombre: "EducArte",
      categoria: "Cultural",
      horario: "Jueves 4:00 - 4:30 PM",
      descripcion:
        "Programa cultural que promueve el arte, la música, el teatro y la creatividad como herramientas educativas.",
      objetivos: [
        "Promover la expresión artística",
        "Desarrollar la sensibilidad estética",
        "Fortalecer la identidad cultural",
        "Integrar el arte en la educación",
      ],
      jingle:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Educarte_mezcla%20%28online-audio-converter.com%29-gwBbvbdWw60qO3l6hYC0EaTN8ajJfz.mp3",
      imagen: null,
    },
    "Historias con Historia": {
      nombre: "Historias con Historia",
      categoria: "Histórico",
      horario: "Sábado 9:00 - 9:30 AM",
      descripcion:
        "Programa que relata hechos históricos de forma amena, con narraciones, entrevistas y dramatizaciones.",
      objetivos: [
        "Enseñar historia de manera entretenida",
        "Preservar la memoria histórica local",
        "Desarrollar conciencia histórica",
        "Promover el respeto por el patrimonio",
      ],
      jingle:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Historia%20con%20Historia_mezcla%20%28online-audio-converter.com%29-DcdNnaO4SmbW33dzKd6sahxUw8HtZ6.mp3",
      imagen: null,
    },
  }

  function ParrillaProgramacion() {
    // Mapeo de programas con sus jingles
    const programasConJingles = {
      EduNoti: true,
      "Arranca la Semana": true,
      "Fronteras Del Tiempo": true,
      "Estilo Libre": true,
      "Voces del Saber": true,
      "Ciencia al Aire": true,
      "El Rincón de la Lectura": true,
      EducArte: true,
      "Historias con Historia": true,
    }

    // Horario como tabla tradicional
    const horarioSemanal = [
      {
        hora: "6:00 - 7:00",
        lunes: "Arranca la Semana",
        martes: "Música Matutina",
        miercoles: "Música Matutina",
        jueves: "Música Matutina",
        viernes: "Música Matutina",
        sabado: "Música Clásica",
        domingo: "Reflexiones Dominicales",
      },
      {
        hora: "7:00 - 8:00",
        lunes: "EduNoti",
        martes: "EduNoti",
        miercoles: "EduNoti",
        jueves: "EduNoti",
        viernes: "EduNoti",
        sabado: "Noticias Fin de Semana",
        domingo: "Música Instrumental",
      },
      {
        hora: "8:00 - 9:00",
        lunes: "Música Variada",
        martes: "Música Variada",
        miercoles: "Música Variada",
        jueves: "Música Variada",
        viernes: "Música Variada",
        sabado: "Música Juvenil",
        domingo: "Música Gospel",
      },
      {
        hora: "9:00 - 10:00",
        lunes: "Educación al Aire",
        martes: "Educación al Aire",
        miercoles: "Educación al Aire",
        jueves: "Educación al Aire",
        viernes: "Educación al Aire",
        sabado: "Historias con Historia",
        domingo: "Música Familiar",
      },
      {
        hora: "10:00 - 11:00",
        lunes: "Música Popular",
        martes: "Música Popular",
        miercoles: "Música Popular",
        jueves: "Música Popular",
        viernes: "El Rincón de la Lectura",
        sabado: "Entretenimiento",
        domingo: "Música Cristiana",
      },
      {
        hora: "11:00 - 12:00",
        lunes: "Música Continua",
        martes: "Ciencia al Aire",
        miercoles: "Música Continua",
        jueves: "Música Continua",
        viernes: "Música Continua",
        sabado: "Música Tropical",
        domingo: "Música Relajante",
      },
      {
        hora: "12:00 - 13:00",
        lunes: "Música del Recuerdo",
        martes: "Música del Recuerdo",
        miercoles: "Música del Recuerdo",
        jueves: "Música del Recuerdo",
        viernes: "Música del Recuerdo",
        sabado: "Música Variada",
        domingo: "Música Instrumental",
      },
      {
        hora: "13:00 - 14:00",
        lunes: "Música Juvenil",
        martes: "Música Juvenil",
        miercoles: "Música Juvenil",
        jueves: "Música Juvenil",
        viernes: "Música Juvenil",
        sabado: "Rock en Español",
        domingo: "Música Suave",
      },
      {
        hora: "14:00 - 15:00",
        lunes: "Música Actual",
        martes: "Música Actual",
        miercoles: "Voces del Saber",
        jueves: "Música Actual",
        viernes: "Música Actual",
        sabado: "Música Romántica",
        domingo: "Música Folclórica",
      },
      {
        hora: "15:00 - 16:00",
        lunes: "Música y Más",
        martes: "Estilo Libre",
        miercoles: "Música y Más",
        jueves: "Estilo Libre",
        viernes: "Música y Más",
        sabado: "Variedades",
        domingo: "Música Internacional",
      },
      {
        hora: "16:00 - 17:00",
        lunes: "Música Continua",
        martes: "Música Continua",
        miercoles: "Música Continua",
        jueves: "EducArte",
        viernes: "Música Continua",
        sabado: "Música Continua",
        domingo: "Música Continua",
      },
      {
        hora: "17:00 - 19:00",
        lunes: "Música Vespertina",
        martes: "Música Vespertina",
        miercoles: "Música Vespertina",
        jueves: "Música Vespertina",
        viernes: "Música Vespertina",
        sabado: "Música Vespertina",
        domingo: "Música Vespertina",
      },
      {
        hora: "19:00 - 20:00",
        lunes: "Noticias Nocturnas",
        martes: "Noticias Nocturnas",
        miercoles: "Noticias Nocturnas",
        jueves: "Noticias Nocturnas",
        viernes: "Noticias Nocturnas",
        sabado: "Música Nocturna",
        domingo: "Reflexiones Nocturnas",
      },
      {
        hora: "20:00 - 21:00",
        lunes: "Fronteras Del Tiempo",
        martes: "Música Nocturna",
        miercoles: "Fronteras Del Tiempo",
        jueves: "Música Nocturna",
        viernes: "Fronteras Del Tiempo",
        sabado: "Música Variada",
        domingo: "Música Suave",
      },
      {
        hora: "21:00 - 6:00",
        lunes: "Música Continua",
        martes: "Música Continua",
        miercoles: "Música Continua",
        jueves: "Música Continua",
        viernes: "Música Continua",
        sabado: "Música Continua",
        domingo: "Música Continua",
      },
    ]

    const redirigirAPrograma = (nombrePrograma: string) => {
      if (programasConJingles[nombrePrograma as keyof typeof programasConJingles]) {
        // Crear un ID válido para el ancla
        const programaId = nombrePrograma
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
        window.location.href = `#programa-${programaId}`
      }
    }

    const esProgramaConJingle = (nombrePrograma: string) => {
      return programasConJingles.hasOwnProperty(nombrePrograma)
    }

    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

    return (
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-6">
          <Calendar className="h-6 w-6 text-purple-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Parrilla de Programación</h3>
        </div>

        {/* Tabla de horarios estilo horario escolar */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Encabezado */}
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold min-w-[120px]">Horario</th>
                  {dias.map((dia) => (
                    <th key={dia} className="px-4 py-3 text-center font-semibold min-w-[140px]">
                      {dia}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Cuerpo de la tabla */}
              <tbody>
                {horarioSemanal.map((franja, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    {/* Columna de hora */}
                    <td className="px-4 py-3 font-semibold text-gray-700 border-r border-gray-200">{franja.hora}</td>

                    {/* Columnas de días */}
                    <td className="px-2 py-3 text-center border-r border-gray-100">
                      {esProgramaConJingle(franja.lunes) ? (
                        <button
                          onClick={() => redirigirAPrograma(franja.lunes)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-all font-medium text-sm cursor-pointer underline"
                        >
                          {franja.lunes}
                        </button>
                      ) : (
                        <span className="text-gray-600 text-sm">{franja.lunes}</span>
                      )}
                    </td>

                    <td className="px-2 py-3 text-center border-r border-gray-100">
                      {esProgramaConJingle(franja.martes) ? (
                        <button
                          onClick={() => redirigirAPrograma(franja.martes)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-all font-medium text-sm cursor-pointer underline"
                        >
                          {franja.martes}
                        </button>
                      ) : (
                        <span className="text-gray-600 text-sm">{franja.martes}</span>
                      )}
                    </td>

                    <td className="px-2 py-3 text-center border-r border-gray-100">
                      {esProgramaConJingle(franja.miercoles) ? (
                        <button
                          onClick={() => redirigirAPrograma(franja.miercoles)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-all font-medium text-sm cursor-pointer underline"
                        >
                          {franja.miercoles}
                        </button>
                      ) : (
                        <span className="text-gray-600 text-sm">{franja.miercoles}</span>
                      )}
                    </td>

                    <td className="px-2 py-3 text-center border-r border-gray-100">
                      {esProgramaConJingle(franja.jueves) ? (
                        <button
                          onClick={() => redirigirAPrograma(franja.jueves)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-all font-medium text-sm cursor-pointer underline"
                        >
                          {franja.jueves}
                        </button>
                      ) : (
                        <span className="text-gray-600 text-sm">{franja.jueves}</span>
                      )}
                    </td>

                    <td className="px-2 py-3 text-center border-r border-gray-100">
                      {esProgramaConJingle(franja.viernes) ? (
                        <button
                          onClick={() => redirigirAPrograma(franja.viernes)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-all font-medium text-sm cursor-pointer underline"
                        >
                          {franja.viernes}
                        </button>
                      ) : (
                        <span className="text-gray-600 text-sm">{franja.viernes}</span>
                      )}
                    </td>

                    <td className="px-2 py-3 text-center border-r border-gray-100">
                      {esProgramaConJingle(franja.sabado) ? (
                        <button
                          onClick={() => redirigirAPrograma(franja.sabado)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-all font-medium text-sm cursor-pointer underline"
                        >
                          {franja.sabado}
                        </button>
                      ) : (
                        <span className="text-gray-600 text-sm">{franja.sabado}</span>
                      )}
                    </td>

                    <td className="px-2 py-3 text-center">
                      {esProgramaConJingle(franja.domingo) ? (
                        <button
                          onClick={() => redirigirAPrograma(franja.domingo)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-all font-medium text-sm cursor-pointer underline"
                        >
                          {franja.domingo}
                        </button>
                      ) : (
                        <span className="text-gray-600 text-sm">{franja.domingo}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Leyenda */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-gray-600">
            <Play className="h-4 w-4 mr-2" />
            <span className="text-sm">
              Los programas en <span className="text-blue-600 font-medium underline">azul</span> te llevan a su página
            </span>
          </div>
          <div className="text-sm text-gray-500">Haz clic en cualquier programa azul para ver más información</div>
        </div>
      </div>
    )
  }

  function ProgramaDetalle({ programa, onVolver }: { programa: any; onVolver: () => void }) {
    const [audioActual, setAudioActual] = useState<HTMLAudioElement | null>(null)
    const [estaReproduciendo, setEstaReproduciendo] = useState(false)

    const toggleJingle = () => {
      if (!audioActual) {
        // Crear nuevo audio
        const nuevoAudio = new Audio(programa.jingle)
        setAudioActual(nuevoAudio)

        nuevoAudio.play().catch((error) => {
          console.error("Error reproduciendo audio:", error)
        })

        setEstaReproduciendo(true)

        // Eventos del audio
        nuevoAudio.addEventListener("ended", () => {
          setEstaReproduciendo(false)
          setAudioActual(null)
        })

        nuevoAudio.addEventListener("pause", () => {
          setEstaReproduciendo(false)
        })

        nuevoAudio.addEventListener("play", () => {
          setEstaReproduciendo(true)
        })
      } else {
        // Controlar audio existente
        if (estaReproduciendo) {
          audioActual.pause()
          setEstaReproduciendo(false)
        } else {
          audioActual.play().catch((error) => {
            console.error("Error reproduciendo audio:", error)
          })
          setEstaReproduciendo(true)
        }
      }
    }

    const detenerJingle = () => {
      if (audioActual) {
        audioActual.pause()
        audioActual.currentTime = 0
        setEstaReproduciendo(false)
        setAudioActual(null)
      }
    }

    // Limpiar audio al desmontar componente
    React.useEffect(() => {
      return () => {
        if (audioActual) {
          audioActual.pause()
          audioActual.currentTime = 0
        }
      }
    }, [audioActual])

    const getCategoriaColor = (categoria: string) => {
      const colores = {
        Motivacional: "bg-purple-100 text-purple-800 border-purple-200",
        Noticiero: "bg-blue-100 text-blue-800 border-blue-200",
        Radionovela: "bg-orange-100 text-orange-800 border-orange-200",
        Entretenimiento: "bg-pink-100 text-pink-800 border-pink-200",
        Educativo: "bg-green-100 text-green-800 border-green-200",
        Cultural: "bg-yellow-100 text-yellow-800 border-yellow-200",
        Literario: "bg-indigo-100 text-indigo-800 border-indigo-200",
        Histórico: "bg-red-100 text-red-800 border-red-200",
      }
      return colores[categoria as keyof typeof colores] || "bg-gray-100 text-gray-800 border-gray-200"
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Botón volver */}
            <Button onClick={onVolver} variant="outline" className="mb-8 hover:bg-blue-50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a la Parrilla
            </Button>

            {/* Información del programa */}
            <Card className="overflow-hidden shadow-xl">
              <div className="md:flex">
                {/* Imagen y info básica */}
                <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-blue-500 p-8 text-white">
                  <div className="text-center">
                    {programa.imagen && (
                      <img
                        src={programa.imagen || "/placeholder.svg"}
                        alt={`Logo ${programa.nombre}`}
                        className="w-32 h-32 mx-auto mb-6 rounded-lg shadow-lg"
                      />
                    )}
                    <h1 className="text-3xl font-bold mb-4">{programa.nombre}</h1>
                    <Badge className={`mb-4 ${getCategoriaColor(programa.categoria)}`}>{programa.categoria}</Badge>
                    <div className="bg-white/20 rounded-lg p-4 mb-6">
                      <Clock className="h-5 w-5 mx-auto mb-2" />
                      <p className="font-semibold">{programa.horario}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={toggleJingle} className="bg-white text-green-600 hover:bg-gray-100">
                        {estaReproduciendo ? (
                          <>
                            <Pause className="h-4 w-4 mr-2" />
                            Pausar Jingle
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            {audioActual ? "Reanudar Jingle" : "Escuchar Jingle"}
                          </>
                        )}
                      </Button>
                      {audioActual && (
                        <Button
                          onClick={detenerJingle}
                          variant="outline"
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <Square className="h-4 w-4 mr-2" />
                          Detener
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contenido detallado */}
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre el Programa</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Descripción</h3>
                      <p className="text-gray-700 leading-relaxed">{programa.descripcion}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Objetivos</h3>
                      <ul className="space-y-2">
                        {programa.objetivos.map((objetivo: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{objetivo}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Información Adicional</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <span className="font-medium text-gray-600">Categoría:</span>
                          <p className="text-gray-800">{programa.categoria}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Horario:</span>
                          <p className="text-gray-800">{programa.horario}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Estado para manejar qué programa se está viendo
  const [programaSeleccionado, setProgramaSeleccionado] = useState<string | null>(null)

  // Efecto para manejar las rutas con hash
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith("#programa-")) {
        const programaId = hash.replace("#programa-", "")
        const nombrePrograma = Object.keys(programasDetallados).find(
          (nombre) =>
            nombre
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9-]/g, "") === programaId,
        )
        if (nombrePrograma) {
          setProgramaSeleccionado(nombrePrograma)
        }
      } else {
        setProgramaSeleccionado(null)
      }
    }

    // Ejecutar al cargar la página
    handleHashChange()

    // Escuchar cambios en el hash
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const volverAParrilla = () => {
    window.location.hash = "#parrilla"
    setProgramaSeleccionado(null)
  }

  // Si hay un programa seleccionado, mostrar su detalle
  if (programaSeleccionado && programasDetallados[programaSeleccionado as keyof typeof programasDetallados]) {
    return (
      <ProgramaDetalle
        programa={programasDetallados[programaSeleccionado as keyof typeof programasDetallados]}
        onVolver={volverAParrilla}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Radio className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Radio EduSonora</h1>
                <p className="text-sm text-gray-600">"Educación que se escucha y se vive"</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#institucion" className="text-gray-700 hover:text-blue-600 transition-colors">
                Institución
              </a>
              <a href="#radio" className="text-gray-700 hover:text-blue-600 transition-colors">
                Radio
              </a>
              <a href="#programas" className="text-gray-700 hover:text-blue-600 transition-colors">
                Programas
              </a>
              <a href="#parrilla" className="text-gray-700 hover:text-blue-600 transition-colors">
                Programación
              </a>
              <a href="#creditos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Créditos
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contenido de texto */}
              <div className="text-center lg:text-left">
                <h2 className="text-5xl font-bold text-gray-900 mb-6">Bienvenidos a Radio EduSonora</h2>
                <p className="text-xl text-gray-700 mb-8">
                  "Educación que se escucha y se vive" - La voz de la Institución Educativa El Retiro de los Indios,
                  transmitiendo educación, cultura y entretenimiento para toda la comunidad
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Mic className="mr-2 h-5 w-5" />
                    Escuchar en Vivo
                  </Button>
                  <Button size="lg" variant="outline">
                    <Music className="mr-2 h-5 w-5" />
                    Ver Programación
                  </Button>
                </div>
              </div>

              {/* Logo de Radio EduSonora */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src="/images/radio-edusonora-logo.jpeg"
                    alt="Logo oficial de Radio EduSonora"
                    className="w-80 h-80 object-contain drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-yellow-400/20 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jingle Section */}
      <section className="py-8 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🎵 Escucha nuestro Jingle Oficial</h3>
            <audio controls className="w-full max-w-md mx-auto">
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle%20Oficial%20Radio-n2msROfLmljOKCi33LryD7F6ubz9w9.mp3"
                type="audio/mpeg"
              />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        </div>
      </section>

      {/* Sección Institución */}
      <section id="institucion" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <School className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Institución Educativa El Retiro de los Indios</h2>
              <p className="text-xl text-gray-600">
                Formando líderes del mañana con excelencia académica y valores sólidos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-center mb-6">
                  <img
                    src="/images/escudo-institucion.jpg"
                    alt="Escudo Institución Educativa Retiro de los Indios"
                    className="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
                  />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nuestra Historia</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  La Institución Educativa El Retiro de los Indios fue fundada con el propósito de brindar educación de
                  calidad a la comunidad, preservando nuestras raíces culturales y preparando a los estudiantes para los
                  desafíos del futuro.
                </p>
                <p className="text-gray-700 mb-6">
                  Con más de décadas de trayectoria, nos hemos consolidado como un referente educativo en la región,
                  destacando por nuestro compromiso con la formación integral de nuestros estudiantes.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">800+</div>
                    <div className="text-sm text-gray-600">Estudiantes</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Docentes</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 text-yellow-600 mr-2" />
                      Misión
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      La Institución Educativa Retiro de los Indios es un establecimiento educativo de carácter oficial
                      y naturaleza mixta que tiene como misión formar personas íntegras y competentes en los ámbitos
                      académicos personales, sociales, laborales, tecnológicos, y ambientales, capaces de transformar su
                      contexto y realidad de forma benéfica, a partir de la implementación de metodologías centradas en
                      los intereses y exigencias de la comunidad, mejorando la calidad de vida en su zona de influencia.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      Visión
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      En el año 2025 la Institución Educativa Retiro de los Indios se proyecta como líder de procesos
                      educativos, transformadores a nivel local y regional, mejorando la calidad de vida, competencias y
                      desempeño de los educandos alcanzando niveles de organización, desarrollo administrativo y
                      académico; y se vean reflejados en el quehacer de cada uno de los miembros de la comunidad en
                      general; mediante la implementación de políticas de participación de todos sus estamentos,
                      aprovechando las oportunidades que se presentan y respondiendo a la planeación institucional de
                      acuerdo a las exigencias educativas del país.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Radio */}
      <section id="radio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Radio className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Radio</h2>
              <p className="text-xl text-gray-600">Conectando corazones a través de las ondas radiales</p>
            </div>

            <div className="mb-12">
              <div className="max-w-4xl mx-auto">
                <img
                  src="/images/estudio-radio.jpg"
                  alt="Estudio de Radio EduSonora - Equipos de producción y edición de audio"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-gray-600 mt-4 italic">
                  Nuestro estudio de radio equipado con tecnología moderna para una transmisión de calidad
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <Mic className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Transmisión en Vivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Transmitimos las 24 horas del día con programación variada y contenido educativo de calidad.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Participación Estudiantil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nuestros estudiantes participan activamente como locutores, productores y creadores de contenido.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Music className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Contenido Diverso</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ofrecemos música, noticias, programas educativos y espacios culturales para toda la familia.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Objetivos de Radio El Retiro</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Promover la educación y el aprendizaje continuo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Difundir la cultura y tradiciones locales</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Fortalecer la identidad institucional</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Crear espacios de participación comunitaria</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Desarrollar habilidades comunicativas en estudiantes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Informar y entretener a la comunidad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programas Principales */}
      <section id="programas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Mic className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Programas Principales</h2>
              <p className="text-xl text-gray-600">Nuestros espacios más destacados en la programación</p>
            </div>

            <div className="grid gap-8">
              {programasPrincipales.map((programa, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-yellow-500 p-8 text-white relative">
                      <div className="text-center">
                        <img
                          src={programa.imagen || "/placeholder.svg"}
                          alt={`Logo ${programa.nombre}`}
                          className="w-24 h-24 mx-auto mb-4 rounded-lg shadow-lg"
                        />
                        <h3 className="text-2xl font-bold mb-2">{programa.nombre}</h3>
                        <Badge variant="secondary" className="bg-white text-green-600 mb-2">
                          {programa.tipo}
                        </Badge>
                        <Badge variant="secondary" className="bg-white text-green-600 mb-2 block">
                          {programa.horario}
                        </Badge>
                        <p className="text-green-100">{programa.dias}</p>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Descripción del Programa</h4>
                      <p className="text-gray-700 mb-6">{programa.descripcion}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programas Secundarios */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Programas Secundarios</h2>
              <p className="text-xl text-gray-600">
                Espacios educativos especializados que enriquecen nuestra programación
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programasSecundarios.map((programa, index) => (
                <Card key={index} className="h-full border-green-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-lg text-green-800">{programa.nombre}</CardTitle>
                    <Badge variant="outline" className="w-fit text-green-600 border-green-600">
                      {programa.horario}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-700 text-sm leading-relaxed">{programa.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parrilla de Programación */}
      <section id="parrilla" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Parrilla de Programación</h2>
              <p className="text-xl text-gray-600">Nuestra programación semanal completa</p>
            </div>

            <ParrillaProgramacion />
          </div>
        </div>
      </section>

      {/* Créditos */}
      <section id="creditos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Equipo Radio EduSonora</h2>
              <p className="text-xl text-gray-600">Los estudiantes que hacen posible nuestra radio</p>
            </div>

            <div className="mb-12">
              {/* Locutores */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  <Mic className="h-6 w-6 text-green-600 mr-3" />
                  Locutores
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <img
                        src="/images/juan-saad.jpg"
                        alt="Juan Saad"
                        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                      />
                      <h4 className="font-bold text-gray-900 mb-1">Juan Saad</h4>
                      <p className="text-sm text-green-600 font-medium">Locutor</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <img
                        src="/images/luis-david-gomez.jpg"
                        alt="Luis David Gómez"
                        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                      />
                      <h4 className="font-bold text-gray-900 mb-1">Luis David Gómez</h4>
                      <p className="text-sm text-green-600 font-medium">Locutor</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <img
                        src="/images/royner.jpg"
                        alt="Royner Díaz"
                        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                      />
                      <h4 className="font-bold text-gray-900 mb-1">Royner Díaz</h4>
                      <p className="text-sm text-green-600 font-medium">Locutor</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <img
                        src="/images/jose-angel-perez.jpg"
                        alt="Jose Angel Perez"
                        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                      />
                      <h4 className="font-bold text-gray-900 mb-1">Jose Angel Perez</h4>
                      <p className="text-sm text-green-600 font-medium">Locutor</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Productor */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  <Music className="h-6 w-6 text-purple-600 mr-3" />
                  Productor
                </h3>
                <div className="flex justify-center">
                  <Card className="text-center hover:shadow-lg transition-shadow w-64">
                    <CardContent className="pt-6">
                      <img
                        src="/images/javier-pastrana.jpg"
                        alt="Javier Pastrana"
                        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                      />
                      <h4 className="font-bold text-gray-900 mb-1">Javier Pastrana</h4>
                      <p className="text-sm text-purple-600 font-medium">Productor</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Desarrolladores Web */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  Desarrolladores Web
                </h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <img
                        src="/images/antony-martinez.jpg"
                        alt="Antony Martínez"
                        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                      />
                      <h4 className="font-bold text-gray-900 mb-1">Antony Martínez</h4>
                      <p className="text-sm text-blue-600 font-medium">Desarrollador Web</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <img
                        src="/images/anibal-cuadrado.jpg"
                        alt="Aníbal Cuadrado"
                        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                      />
                      <h4 className="font-bold text-gray-900 mb-1">Aníbal Cuadrado</h4>
                      <p className="text-sm text-blue-600 font-medium">Desarrollador Web</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Agradecimientos Especiales */}
            <div className="text-center mb-8">
              <Card className="bg-gradient-to-r from-yellow-50 to-green-50 border-green-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Agradecimientos Especiales</h3>
                  <p className="text-gray-700 mb-6">
                    A toda la comunidad educativa de la Institución Educativa El Retiro de los Indios, padres de
                    familia, estudiantes y docentes que hacen posible este proyecto comunicativo.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">🎵 Adobe Audition</h4>
                      <p className="text-sm text-gray-600">Edición y producción de audio profesional</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">🖼️ Pixabay</h4>
                      <p className="text-sm text-gray-600">Recursos gráficos y multimedia</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">🤖 ChatGPT</h4>
                      <p className="text-sm text-gray-600">Asistencia en contenido y desarrollo</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">🎼 Suno</h4>
                      <p className="text-sm text-gray-600">Creación de jingles y música</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm">
                    Radio EduSonora - Transmitiendo educación, cultura y valores desde el corazón de nuestra
                    institución.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Radio className="h-8 w-8 text-green-400" />
                  <div>
                    <h3 className="text-xl font-bold">Radio EduSonora</h3>
                    <p className="text-gray-400 text-sm">"Educación que se escucha y se vive"</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Conectando corazones y mentes a través de las ondas radiales, promoviendo la educación y la cultura en
                  nuestra comunidad.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-green-400" />
                    <span className="text-gray-400">+57 (123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-green-400" />
                    <span className="text-gray-400">radio@edusonora.edu.co</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-green-400" />
                    <span className="text-gray-400">El Retiro de los Indios, Colombia</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Horarios de Transmisión</h4>
                <div className="text-gray-400 space-y-1">
                  <p>Lunes a Viernes: 6:00 AM - 10:00 PM</p>
                  <p>Sábados: 7:00 AM - 10:00 PM</p>
                  <p>Domingos: 8:00 AM - 9:00 PM</p>
                  <p className="text-green-400 font-semibold mt-2">¡Música continua las 24 horas!</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Radio EduSonora - Institución Educativa El Retiro de los Indios. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
