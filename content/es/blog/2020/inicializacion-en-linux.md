---
title: Instalé Linux... ¿Y ahora qué?
date: 2020-12-15
---
## Instalé Linux... ¿Y ahora qué?

> Nota: en esta entrada asumo que instalaste Ubuntu. ¿Porque es mi favorito?
> absolutamente no. Porque es 95% probable que sea el que te instalaste.

### Adaptación

Te voy a ser bien sincero: vas a tener problemas.

Yo siempre lo digo, linux no es para todos, pero tenemos un indicio de que puede ser para vos: ya lo instalaste...

Vas a estar muchas veces googleando o preguntandole a algún conocido por qué algo no te anda, pero tranquilo, eso se convierte en conocimiento a la larga y: o terminas disfrutando linux o lo abandonas...

Porque al final se hace un poco divertido buscar como hacer ciertas cosas para tener cosas re piolas, que en windows probablemente se puedan hacer pero instalando muchos softwares, que a veces son pesaditos porque hacen mas de lo que necesitamos, a veces teniendo que crackearlos (que no deberiamos 1. por el trabajo de la persona y 2. por que el crack tambien puede ser malicioso) de mucha gente que no sabes si confiar, acá en la comunidad cuando tenés que instalar algo dudoso ni te lo recomiendan.

Bueno así que en lo primero que te voy a ser sincero, es que vas a necesitar mucho usar la terminal.

### La terminal

Una desventaja que tienen los entornos de escritorio de Linux es que todavia no se puede hacer todo con clicks como en windows... Están bastante maduros (al menos los principales que pueden ser `GNOME` (la que trae por defecto Ubuntu), `KDE` `PLASMA`, `XFCE`), pero vas a recurrir a la terminal en algún momento **seguro**.

Por ejemplo, tenés siempre a tu disposicion un instalador de paquetes (no me preguntes el nombre, se debe llamar _tienda de ubuntu_ o algo asi) donde podés instalar casi cualquier software que necesites; pero yo si te voy a recomendar instalar algo, te voy a pasar el comando para que metas en la terminal directamente, porque rapido vas a tener instalando varios paquetes.

Así que mi primer consejo: hacele un acceso directo a la terminal, o podés memorizar que creo que con Ctrl+Alt+T la podés abrir, y empezá a familiarizarte un poquito con ella...

Podes buscar en la tienda también distintas terminales para probar, hay cientos de terminales en Linux y es el lugar en el que más tiempo vas a pasar.

Otra cosa que podes hacer con la terminal es instalarle fish, es una linea de comandos para "novatos" o como yo los llamo, "vagos", voy a llamar cosas para vagos a estas cosas que no necesitas hacer mucho para  tener cosas copadas. Pero vas a leer mucho más el termino "novato" un poco por el ego linux que hay en la comunidad... Algo malo teníamos que tener 😎.

> Este es el primer comando para instalar algo que te voy a dejar aca tirado asique primero ejecuta:
> ```sudo apt update```
> Esto lo vas a tener que ejecutar cada cierto tiempo...
>

Se puede instalar con el comando

```sudo apt install fish```

O buscando ```fish``` en la tienda...

Para probarlo abrís la terminal y ejecutas: ```fish```.

Ya despues vamos a ver como hacer para que esté siempre abierto por defecto.

Lo que tenés que hacer en fish para decir _woow que piola fish_, es ejecutar:

```fish_config```

, te abre la configuracion en el navegador, vas a la pestaña `'prompt'` y elegis la `'prompt'` que más te guste.
La prompt es lo que se muestra en la terminal todo el tiempo cada vez que apretás enter... Para terminar volves a la terminal y apretás enter para que se desconecte del navegador, y ¡Listo! Tenés la nueva prompt...

También cuando escribís comandos, apreta siempre el `TAB` para autocompletarlos... Si estas escribiendo por ejemplo el comando ```firefox``` , escribís ```fir``` y apretas el `TAB`, si hay mas de una opción tenes que apretarlo varias veces para que te lo autocomplete.

Pero basta de terminales, si queres más sobre la terminal despues voy a tirar más tips.

### Aplicaciones

Si sos Chrome-dependiente como yo, capaz en la tienda te preocupe que no esté Google Chrome, pasa en varios sistemas linux... Si no está el que si está seguro es Chromium. Podes instalarlo tranquilo es igual a chrome, y es de google, ¡Sin miedo!.

```sudo apt install chromium```

Mas en general, no le tenes que tener miedo a nada que venga por defecto en la tienda...

> UPDATE: Unos meses después de escribir esta entrada, Google quitó la posibilidad de sincronizar sus cuentas en Chromium. Por lo tanto ahora sí se hace más necesario descargar el software comercial **Google Chrome**.

<!-- Ahora con el tema discord, que raro que no te haya funcionado... Tenes que asegurarte de descargar los archivos DEB para instalar en Ubuntu.. y generalmente haciendoles doble click ya se te instala... o a veces haciendole boton derecho > abrir con > y elegir instalador de paquetes o algo por el estilo... -->
<!-- Y si no , la opcion segura es descargar la opcion "TAR.GZ" , es como un zip, lo descomprimis y buscas adentro el ejecutable. -->
<!-- Podes probar buscar discord en la tienda tambien pero en ubuntu creo que no viene por defecto... Hablando de eso, algo clave para tener en linux es SNAP o FLATPAK, no se instalarlos porque vienen por defecto en mi linux, pero lo podemos ver despues. SNAP / FLATPAK Son tiendas que funcionan en todos los linux y tienen muchos programitas que a veces no vienen en la tienda, como discord. -->

En el caso de Steam creo que si viene en la tienda de Ubuntu. Podés probar:

```apt install steam```

Y si no, en la pagina oficial te dan un archivo `.DEB` para descargar. Los `.DEB` son como los `.MSI` o `.EXE` de windows en linux.

Algo de lo cual no conozco alternativa en Windows para comparar, aunque ya están integrando algo parecido en el propio Windows, es KDE Connect. De la mano de la app Android con el mismo nombre, podés usar el celular para algunas tareas a "distancia" (en la misma red).

Podés controlar el mouse, ejecutar comandos pre-escritos desde el celular; además entre los dos pueden [escribir, manejar la reproducción multimedia (pausar, siguiente, anterior, volumen), enviar archivos, compartir el portapapeles y compartir las notificaciones] sobre el otro dispositivo. Y por último desde la pc podés ver la batería del teléfono, hacerlo sonar si no lo encontrás y abrir la cámara para capturar una foto y recibirla directamente en la PC.

```apt install kdeconnect```

Una cosa que puede ser util tener a mano, es ```wine```, sirve para ejecutar cosas de windows en linux. Se instala tan facil como:

```sudo apt install wine```

Y ya podes ejecutar archivos '.exe', funciona sorprendentemente bien el 40% de las veces. Bueno para los jueguitos viejos que podes tener por ahi tirados, esos funcionan bastante seguido. Para juegos nuevos lo mejor es tenerlos en steam y si no funcionan en linux steam tiene su propia version de "wine" que la llaman "Proton" o para los amigos "Steam Play" y te deja ejecutarlos como si nada siempre que vos lo habilites desde la configuración... En ese caso funciona el 80% de las veces y los juegos obviamente tienen un rendimiento menor, debe andar por el 70%, pero yo juego así Rocket League en este momento sin problemas.

Otra cosa que podés necesitar abrir como `.exe` es grandes softwares como los de Adobe, Corel, Microsoft.

Pues olvidate. Al menos yo nunca pude (no me esforcé **mucho** tampoco), excepto instalando Virtual Box y creando una maquina virtual de windows.

Pero esto nos da el pie a la última sección que te voy a dar en esta guía rápida...

### Alternativas de grandes softwares

Existen alternativas funcionales en linux al 80% del software privativo.

Hasta existen alternativas, no solo gratuitas, si no tambien **Open Source**.

A veces son muy parecidas a las originales, a veces difieren bastante, pero lo importante es que pueden obtener, de la misma o distinta forma, los mismos resultados a nivel amateur; solo si estás de acuerdo en aprender cosas desde 0.

#### Microsoft Office.

Hace años no los uso, lo poco que lo necesité fue más que suficiente Google Docs, Google Sheets, con las ventajas de tener todo online. También ahora se puede usar de forma gratuita Microst Word y Excel online tal como los productos de Google.

Google Docs y Sheets se pueden configurar para tenerlos disponibles sin internet también buscando un poco...

Pero tambien tenemos algunas alternativas de código abierto: `Libre Office` y `Open Office`.

No son tan buenas como las versiones de Microsoft y Google pero pueden estar ahí para salvarte las pápas. En algunas distribuciones Linux vienen instaladas o te ofrecen instalarlas en el proceso de instalación, y como casi todo el software open source, son muy livianas.

#### Adobe Photoshop.

Lo usaba para cosas simples, pero aprendiendo a usar bien GIMP ahora ni en Windows lo volví a usar.

Para el 70% de cosas saber un poco de GIMP es más que suficiente.

```sudo apt install gimp```

En el caso de que uses Photoshop para dibujar gimp puede servir, pero recomendaría mucho mas usar Krita.

```sudo apt install krita```

#### Adobe Illustrator / Corel Draw.

Exactamente igual que el caso de Photoshop, aprender a usar esto es más que suficiente para hacer cosas básicas. Pero en este caso estoy más enamorado de la herramienta libre.

Se trata de `Inkscape`, bastante poderosa, y al igual que gimp, es una herramienta *MUY* liviana en comparación a sus alternativas de las grandes empresas.

```sudo apt install inkscape```

#### Programas de edición de video.

El año pasado (2019) conocí tambien un editor de video libre muy decente.

Para sorpresa de nadie es de la gran comunidad de KDE. Se llama `kdenlive` y se puede considerar una humilde alternativa a Camtasia Studio, Sony Vegas y Adobe Premiere.

```sudo apt install kdenlive```

Como un extra, para hacer las composiciones de video que se pueden hacer con Adobe After Effects y otras que desconozco, puede valer la pena darle una oportunidad a Natron.

```sudo apt install natron```

En la terminal como te dije al comienzo podes instalar varias aplicaciones a la vez así que te recomiendo por ultimo ejecutar este para instalar los que más te recomiendo:

Primero: ```sudo apt update```   .

Despues:

```sudo apt install fish kdeconnect wine gimp```

Y si tenés unos MBs libres podés instalar todos los multimedia ahora para ir probándolos cuando los necesites, ocupan muy poco espacio y son tan livianos que podrías usarlos todos a la vez.

Y bueno estoy a tu disposicion para cualquier duda que tengas a lo largo de tu viaje por linux...

Solo dejá un comentario, unite al discord o visitá el inicio de mi página para encontrar más formas de contacto.
