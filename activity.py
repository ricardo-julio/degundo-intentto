from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/calcular", methods=["GET"])
def calcular():
  x = float(app.args.get("x"))
  z = float(app.args.get("z"))

  y = x * z + z + x

  return f"El valor de Y es {y}"






@app.route("/tabla", methods=["GET"])
def tabla():
    numero = int(app.args.get("numero"))

    tabla = "".join(
        f"{numero * i}\n"
        for i in range(1, 11)
    )

    return tabla




@app.route("/")
def index():
    """Programa principal."""


    radio = float(input("Ingrese el radio del círculo: "))
    lado = float(input("Ingrese el lado del cuadrado: "))
    base = float(input("Ingrese la base del triángulo: "))
    altura = float(input("Ingrese la altura del triángulo: "))

 
    area_circulo = 3.14159 * radio ** 2
    area_cuadrado = lado ** 2
    area_triangulo = (base * altura) / 2


    return {
        "area_circulo": area_circulo,
        "area_cuadrado": area_cuadrado,
        "area_triangulo": area_triangulo,
    }




if __name__ == "__main__":
  app.run(debug=True)
