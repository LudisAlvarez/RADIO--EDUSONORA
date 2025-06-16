"use client"

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

  function ParrillaProgramacion() {
    const [diaSeleccionado, setDiaSeleccionado] = useState("Lunes")
    const [audioActual, setAudioActual] = useState<HTMLAudioElement | null>(null)

    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

    const programacionSemanal = {
      Lunes: [
        {
          nombre: "Arranca la Semana",
          categoria: "Motivacional",
          descripcion:
            "Programa que da inicio a la semana escolar con noticias educativas, efemérides, motivación y temas de interés general para toda la comunidad.",
          horario: "7:00 - 8:00",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Arranca%20la%20semana%20Mezcla%201%20%28online-audio-converter.com%29-Hs07gOlF9Yrlw1lVlwQKC6xG6bDAg4.mp3",
        },
        {
          nombre: "EduNoti",
          categoria: "Noticiero",
          descripcion:
            "Noticiero educativo que informa sobre acontecimientos locales, nacionales e internacionales con enfoque pedagógico y análisis crítico.",
          horario: "8:00 - 8:30",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EduNoti%20final%20%28online-audio-converter.com%29%20%281%29-5oRgRgtiCmIF1i7X74hYfj5lIoJ2mZ.mp3",
        },
        {
          nombre: "Fronteras Del Tiempo",
          categoria: "Radionovela",
          descripcion:
            "Radionovela original que transporta a los oyentes a través de diferentes épocas históricas, combinando entretenimiento con aprendizaje.",
          horario: "8:00 PM - 8:30 PM",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fronteras%20del%20tiempo%20Mezcla%201%20%28online-audio-converter.com%29-1dhx3CfltGCxZBvTb6WaZMnofyj646.mp3",
        },
      ],
      Martes: [
        {
          nombre: "EduNoti",
          categoria: "Noticiero",
          descripcion:
            "Noticiero educativo que informa sobre acontecimientos locales, nacionales e internacionales con enfoque pedagógico y análisis crítico.",
          horario: "8:00 - 8:30",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EduNoti%20final%20%28online-audio-converter.com%29%20%281%29-5oRgRgtiCmIF1i7X74hYfj5lIoJ2mZ.mp3",
        },
        {
          nombre: "Ciencia al Aire",
          categoria: "Educativo",
          descripcion:
            "Un viaje fascinante por el mundo de la ciencia con datos curiosos, experimentos y explicaciones accesibles.",
          horario: "11:00 - 11:30",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Ciencia%20al%20aire_mezcla%20%28online-audio-converter.com%29-jsLWUXhDdien1wTpTFqyrqp9O1z4HR.mp3",
        },
        {
          nombre: "Estilo Libre",
          categoria: "Entretenimiento",
          descripcion:
            "Programa de entretenimiento juvenil con música actual, juegos, concursos, entrevistas y espacios de participación libre.",
          horario: "3:00 PM - 4:00 PM",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Estilo%20Libre%20Prog%20Entretenimiento%20%281%29%20%28online-audio-converter.com%29%20%281%29-DZRFGi8OiQWQzG49dP5qZCB1Uila4i.mp3",
        },
      ],
      Miércoles: [
        {
          nombre: "EduNoti",
          categoria: "Noticiero",
          descripcion:
            "Noticiero educativo que informa sobre acontecimientos locales, nacionales e internacionales con enfoque pedagógico y análisis crítico.",
          horario: "8:00 - 8:30",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EduNoti%20final%20%28online-audio-converter.com%29%20%281%29-5oRgRgtiCmIF1i7X74hYfj5lIoJ2mZ.mp3",
        },
        {
          nombre: "Voces del Saber",
          categoria: "Educativo",
          descripcion:
            "Espacio donde los docentes comparten conocimientos de manera clara y didáctica sobre distintas áreas del saber.",
          horario: "2:00 PM - 2:30 PM",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Voces%20del%20saber%20Mezcla%201%20%28online-audio-converter.com%29-85Hw0xzPw8Fc4e4S4Hq7aE6cdvA3cC.mp3",
        },
        {
          nombre: "Fronteras Del Tiempo",
          categoria: "Radionovela",
          descripcion:
            "Radionovela original que transporta a los oyentes a través de diferentes épocas históricas, combinando entretenimiento con aprendizaje.",
          horario: "8:00 PM - 8:30 PM",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fronteras%20del%20tiempo%20Mezcla%201%20%28online-audio-converter.com%29-1dhx3CfltGCxZBvTb6WaZMnofyj646.mp3",
        },
      ],
      Jueves: [
        {
          nombre: "EduNoti",
          categoria: "Noticiero",
          descripcion:
            "Noticiero educativo que informa sobre acontecimientos locales, nacionales e internacionales con enfoque pedagógico y análisis crítico.",
          horario: "8:00 - 8:30",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EduNoti%20final%20%28online-audio-converter.com%29%20%281%29-5oRgRgtiCmIF1i7X74hYfj5lIoJ2mZ.mp3",
        },
        {
          nombre: "Estilo Libre",
          categoria: "Entretenimiento",
          descripcion:
            "Programa de entretenimiento juvenil con música actual, juegos, concursos, entrevistas y espacios de participación libre.",
          horario: "3:00 PM - 4:00 PM",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Estilo%20Libre%20Prog%20Entretenimiento%20%281%29%20%28online-audio-converter.com%29%20%281%29-DZRFGi8OiQWQzG49dP5qZCB1Uila4i.mp3",
        },
        {
          nombre: "EducArte",
          categoria: "Cultural",
          descripcion:
            "Programa cultural que promueve el arte, la música, el teatro y la creatividad como herramientas educativas.",
          horario: "4:00 PM - 4:30 PM",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Educarte_mezcla%20%28online-audio-converter.com%29-gwBbvbdWw60qO3l6hYC0EaTN8ajJfz.mp3",
        },
      ],
      Viernes: [
        {
          nombre: "EduNoti",
          categoria: "Noticiero",
          descripcion:
            "Noticiero educativo que informa sobre acontecimientos locales, nacionales e internacionales con enfoque pedagógico y análisis crítico.",
          horario: "8:00 - 8:30",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EduNoti%20final%20%28online-audio-converter.com%29%20%281%29-5oRgRgtiCmIF1i7X74hYfj5lIoJ2mZ.mp3",
        },
        {
          nombre: "El Rincón de la Lectura",
          categoria: "Literario",
          descripcion:
            "Programa dedicado a la lectura en voz alta, cuentos, relatos y actividades literarias para fomentar el gusto por la lectura.",
          horario: "10:00 AM - 10:30 AM",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Rinc%C3%B3n%20de%20la%20lectura_mezcla%20%28online-audio-converter.com%29-VeLaz11Qm2p6UgSrBwS51y8eH0oWn8.mp3",
        },
        {
          nombre: "Fronteras Del Tiempo",
          categoria: "Radionovela",
          descripcion:
            "Radionovela original que transporta a los oyentes a través de diferentes épocas históricas, combinando entretenimiento con aprendizaje.",
          horario: "8:00 PM - 8:30 PM",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fronteras%20del%20tiempo%20Mezcla%201%20%28online-audio-converter.com%29-1dhx3CfltGCxZBvTb6WaZMnofyj646.mp3",
        },
      ],
      Sábado: [
        {
          nombre: "Historias con Historia",
          categoria: "Histórico",
          descripcion:
            "Programa que relata hechos históricos de forma amena, con narraciones, entrevistas y dramatizaciones.",
          horario: "9:00 AM - 9:30 AM",
          jingle:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle-Historia%20con%20Historia_mezcla%20%28online-audio-converter.com%29-DcdNnaO4SmbW33dzKd6sahxUw8HtZ6.mp3",
        },
      ],
      Domingo: [],
    }

    const reproducirJingle = (jingleUrl: string) => {
      // Detener audio actual si existe
      if (audioActual) {
        audioActual.pause()
        audioActual.currentTime = 0
      }

      // Crear nuevo audio
      const nuevoAudio = new Audio(jingleUrl)
      nuevoAudio.play().catch((error) => {
        console.error("Error reproduciendo audio:", error)
      })
      setAudioActual(nuevoAudio)

      // Limpiar cuando termine
      nuevoAudio.addEventListener("ended", () => {
        setAudioActual(null)
      })
    }

    const getCategoriaColor = (categoria: string) => {
      const colores = {
        Motivacional: "bg-purple-100 text-purple-800",
        Noticiero: "bg-blue-100 text-blue-800",
        Radionovela: "bg-orange-100 text-orange-800",
        Entretenimiento: "bg-pink-100 text-pink-800",
        Educativo: "bg-green-100 text-green-800",
        Cultural: "bg-yellow-100 text-yellow-800",
        Literario: "bg-indigo-100 text-indigo-800",
        Histórico: "bg-red-100 text-red-800",
        Musical: "bg-gray-100 text-gray-800",
      }
      return colores[categoria as keyof typeof colores] || "bg-gray-100 text-gray-800"
    }

    return (
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center mb-6">
          <Calendar className="h-6 w-6 text-purple-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Parrilla de Programación</h3>
        </div>

        {/* Pestañas de días */}
        <div className="flex flex-wrap gap-2 mb-8">
          {dias.map((dia) => (
            <button
              key={dia}
              onClick={() => setDiaSeleccionado(dia)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                diaSeleccionado === dia
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {dia}
            </button>
          ))}
        </div>

        {/* Lista de programas */}
        <div className="space-y-4">
          {programacionSemanal[diaSeleccionado as keyof typeof programacionSemanal].map((programa, index) => (
            <div
              key={index}
              onClick={() => reproducirJingle(programa.jingle)}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {programa.nombre}
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoriaColor(programa.categoria)}`}
                    >
                      {programa.categoria}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{programa.descripcion}</p>
                </div>

                <div className="flex-shrink-0 ml-4">
                  <span className="text-lg font-semibold text-gray-700">{programa.horario}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje informativo */}
        <div className="mt-6 flex items-center justify-center text-gray-500">
          <Play className="h-4 w-4 mr-2" />
          <span className="text-sm italic">Haz clic en cualquier programa para escuchar su jingle</span>
        </div>
      </div>
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
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Bienvenidos a Radio EduSonora</h2>
            <p className="text-xl text-gray-700 mb-8">
              "Educación que se escucha y se vive" - La voz de la Institución Educativa El Retiro de los Indios,
              transmitiendo educación, cultura y entretenimiento para toda la comunidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src="/images/jose-angel-perez.jpg"
                    alt="Jose Angel Perez"
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                  />
                  <h3 className="font-bold text-gray-900 mb-2">Jose Angel Perez</h3>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src="/images/luis-david-gomez.jpg"
                    alt="Luis David Gómez"
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                  />
                  <h3 className="font-bold text-gray-900 mb-2">Luis David Gómez</h3>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src="/images/juan-saad.jpg"
                    alt="Juan Saad"
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                  />
                  <h3 className="font-bold text-gray-900 mb-2">Juan Saad</h3>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src="/images/javier-pastrana.jpg"
                    alt="Javier Pastrana"
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                  />
                  <h3 className="font-bold text-gray-900 mb-2">Javier Pastrana</h3>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src="/images/royner.jpg"
                    alt="Royner Díaz"
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                  />
                  <h3 className="font-bold text-gray-900 mb-2">Royner Díaz</h3>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src="/images/anibal-cuadrado.jpg"
                    alt="Aníbal Cuadrado"
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                  />
                  <h3 className="font-bold text-gray-900 mb-2">Aníbal Cuadrado</h3>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src="/images/antony-martinez.jpg"
                    alt="Antony Martínez"
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
                  />
                  <h3 className="font-bold text-gray-900 mb-2">Antony Martínez</h3>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Card className="bg-gradient-to-r from-yellow-50 to-green-50 border-green-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Agradecimientos Especiales</h3>
                  <p className="text-gray-700 mb-4">
                    A toda la comunidad educativa de la Institución Educativa El Retiro de los Indios, padres de
                    familia, estudiantes y docentes que hacen posible este proyecto comunicativo.
                  </p>
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
