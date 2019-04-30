let player1 = prompt('Ingrese nombre del primer jugador', '')
let player2 = prompt('Ingrese nombre del segundo jugador', '')
let boton = document.getElementById('b1')
boton.addEventListener('click', lanzar)

let p1 = new Persona(player1)
let p2 = new Persona(player2)
let d = new Dado()
let orden = true


document.getElementById('name1').innerHTML = p1.getName()
document.getElementById('pos1').innerHTML = p1.getPosicion()

document.getElementById('name2').innerHTML = p2.getName()
document.getElementById('pos2').innerHTML = p2.getPosicion()

function lanzar()
{
    let t1 = d.getVal()
    let t2 = d.getVal()

    let tiro = t1 + t2
    document.getElementById('dado').innerHTML = `Dado: ${tiro}`

    if (orden)
    {
        let np = p1.getPosicion() + tiro

        p1.setPosicion(np)

        switch(p1.getPosicion()){
            case 4:
                alert('Escalera: sube a posición 25')
                p1.setPosicion(25)
                break
            case 13:
                alert('Escalera: sube a posición 46')
                p1.setPosicion(46)
                break
            case 27:
                alert('Serpiente: baja a posición 5')
                p1.setPosicion(5)
                break
            case 33:
                alert('Escalera: sube a posición 49')
                p1.setPosicion(49)
                break
            case 40:
                alert('Serpiente: baja a posición 3')
                p1.setPosicion(3)
                break
            case 42:
                alert('Escalera: sube a posición 63')
                p1.setPosicion(63)
                break
            case 43:
                alert('Serpiente: baja a posición 18')
                p1.setPosicion(18)
                break
            case 50:
                alert('Escalera: sube a posición 69')
                p1.setPosicion(69)
                break
            case 54:
                alert('Serpiente: baja a posición 31')
                p1.setPosicion(31)
                break
            case 62:
                alert('Escalera: sube a posición 81')
                p1.setPosicion(81)
                break
            case 66:
                alert('Serpiente: baja a posición 45')
                p1.setPosicion(45)
                break
            case 74:
                alert('Escalera: sube a posición 92')
                p1.setPosicion(92)
                break
            case 76:
                alert('Serpiente: baja a posición 58')
                p1.setPosicion(58)
                break
            case 89:
                alert('Serpiente: baja a posición 53')
                p1.setPosicion(53)
                break
            case 99:
                alert('Serpiente: baja a posición 41')
                p1.setPosicion(41)
                break
        }

        document.getElementById('pos1').innerHTML = p1.getPosicion()
        orden = false

        if (getWinner(p1)) {
            alert(`Winner: ${p1.nombre}`)
            location.reload()
        }
    }
    else{
        let np = p2.getPosicion() + tiro

        p2.setPosicion(np)

        switch (p2.getPosicion()) {
            case 4:
                alert('Escalera: sube a posición 25')
                p2.setPosicion(25)
                break
            case 13:
                alert('Escalera: sube a posición 46')
                p2.setPosicion(46)
                break
            case 27:
                alert('Serpiente: baja a posición 5')
                p2.setPosicion(5)
                break
            case 33:
                alert('Escalera: sube a posición 49')
                p2.setPosicion(49)
                break
            case 40:
                alert('Serpiente: baja a posición 3')
                p2.setPosicion(3)
                break
            case 42:
                alert('Escalera: sube a posición 63')
                p2.setPosicion(63)
                break
            case 43:
                alert('Serpiente: baja a posición 18')
                p2.setPosicion(18)
                break
            case 50:
                alert('Escalera: sube a posición 69')
                p2.setPosicion(69)
                break
            case 54:
                alert('Serpiente: baja a posición 31')
                p2.setPosicion(31)
                break
            case 62:
                alert('Escalera: sube a posición 81')
                p2.setPosicion(81)
                break
            case 66:
                alert('Serpiente: baja a posición 45')
                p2.setPosicion(45)
                break
            case 74:
                alert('Escalera: sube a posición 92')
                p2.setPosicion(92)
                break
            case 76:
                alert('Serpiente: baja a posición 58')
                p2.setPosicion(58)
                break
            case 89:
                alert('Serpiente: baja a posición 53')
                p2.setPosicion(53)
                break
            case 99:
                alert('Serpiente: baja a posición 41')
                p2.setPosicion(41)
                break
        }

        document.getElementById('pos2').innerHTML = p2.getPosicion()
        orden = true

        if (getWinner(p2))
        {
            alert(`Winner: ${p2.nombre}`)
            location.reload()
        }
    }
}

function getWinner(p){
    if(p.getPosicion() >= 100)
    {
        return true
    }
    else{
        return false
    }
}