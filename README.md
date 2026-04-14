# Decision Pilot IA

## Objetivo del proyecto

Decision Pilot IA es una miniaplicación web educativa diseñada para ayudar a estructurar decisiones complejas mediante el uso de prompts bien definidos. Su finalidad es guiar al usuario en la formulación del problema, el análisis de datos, la identificación de riesgos y la comparación de alternativas antes de consultar una IA.

La herramienta no toma decisiones por sí sola, sino que obliga a razonar de forma estructurada y justificable.

---

## Qué problema resuelve

En muchos casos, el uso de IA se limita a preguntas genéricas que generan respuestas poco útiles o superficiales. Este proyecto resuelve ese problema proporcionando una estructura clara que:

- obliga a definir el contexto y la decisión  
- organiza los datos disponibles  
- identifica restricciones y riesgos  
- fuerza la comparación de alternativas  
- separa automatización y control humano  

El resultado es un prompt robusto que permite obtener recomendaciones más útiles, trazables y profesionales.

---

## Casos incluidos

La aplicación incluye cuatro escenarios de uso:

1. **Admisión y becas universitarias**  
   Evaluación de automatización en procesos sensibles con riesgo de sesgo.

2. **Tickets internos de soporte TI**  
   Clasificación y escalado de incidencias con diferenciación entre casos estándar y críticos.

3. **Devoluciones y fraude en e-commerce**  
   Equilibrio entre experiencia del cliente y control del fraude.

4. **Asistente interno de documentación corporativa**  
   Comparación de arquitecturas (SaaS, privada, híbrida) considerando coste, latencia y privacidad.

---

## Estructura de archivos

El proyecto está organizado de la siguiente forma:

- `index.html` → Interfaz principal de la aplicación  
- `style.css` → Diseño visual y estilos  
- `app.js` → Lógica de interacción y generación del prompt  
- `prompts.js` → Motor de prompts y reglas de decisión  
- `data/ejemplos.json` → Casos precargados para pruebas  
- `README.md` → Documentación del proyecto  

---

## Instrucciones de uso

1. Abrir la aplicación en el navegador (local o desplegada).  
2. Seleccionar uno de los cuatro casos disponibles.  
3. Completar los campos:
   - contexto  
   - decisión  
   - datos disponibles  
   - restricciones  
4. Pulsar **“Generar prompt final”** para crear el prompt estructurado.  
5. Revisar el resultado en pantalla.  
6. Pulsar **“Copiar prompt”** y utilizarlo en una IA externa.

---

## Despliegue en GitHub Pages

Para publicar la aplicación:

1. Subir todos los archivos al repositorio en GitHub  
2. Ir a **Settings** del repositorio  
3. Acceder a la sección **Pages**  
4. Seleccionar la rama principal (main o master) como fuente  
5. Guardar la configuración  
6. Esperar a que se genere la URL pública  
7. Verificar que la aplicación carga correctamente  

---

## Limitaciones del proyecto

- No incluye backend ni persistencia de datos  
- No se conecta directamente a APIs de IA; genera prompts para uso externo  
- Depende de la calidad de los datos introducidos por el usuario  
- No valida en profundidad la veracidad de la información  
- Es una herramienta educativa, no un sistema de decisión en producción  

---

## Autores

Proyecto desarrollado en el laboratorio **Decision Pilot IA** de Diseño e Implementación de los Sistemas de la Información

- Julia Rosa Martínez Redondo
