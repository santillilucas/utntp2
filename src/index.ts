import { Autor } from "./entities/Autor";
import { Biblioteca } from "./entities/Biblioteca";
import { LibroImpreso } from "./entities/LibroImpreso";

const lucas = new Autor("lucas", "santilli")
const erica = new Autor("Erica", "Giever")


const libro1 = new LibroImpreso ("Movy dick", lucas)
const libro2 = new LibroImpreso ("Crepusculo", erica)

const biblioteca  = new Biblioteca()
biblioteca.agregarLibro(libro1)
biblioteca.agregarLibro(libro2)

biblioteca.mostrarCatalogo()
