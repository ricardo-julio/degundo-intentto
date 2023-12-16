function enviar() {
    // Get content element
    var contenido = document.querySelector('#contenido');
  
    // Get values from input fields
    var v1 = document.querySelector('#t1').value;
    var v2 = document.querySelector('#t2').value;
    var v3 = document.querySelector('#t3').value;
  
    // Define URL based on selected option
    var url = "";
    if (document.querySelector('#opcion1').checked) {
      url = 'http://127.0.0.1:5000';
    } else if (document.querySelector('#opcion2').checked) {
      url = `http://127.0.0.1:5000/notas/${v1}/${v2}/${v3}`;
    } else if (document.querySelector('#opcion3').checked) {
      url = `http://127.0.0.1:5000/edades/${v1}`;
    } else if (document.querySelector('#opcion4').checked) {
      url = `http://127.0.0.1:5000/arreglos/${v1}/${v2}/${v3}`;
    } else {
      swal("Mensaje", "Seleccione una opción", "warning");
      return; // Stop execution if no option is selected
    }
  
    // Fetch data from the API
    fetch(url)
      .then(function (response) {
        if (response.ok) {
          return response.text();
        } else {
          throw "Error en la llamada"; // Throw error if response is not OK
        }
      })
      .then(function (texto) {
        console.log(texto); // Log the response text
        contenido.innerHTML = texto; // Set content element's inner HTML with the text
        // You can uncomment the following lines if needed
        // document.write(texto);
        // swal("Mensaje", "Proceso realizado correctamente", "success");
      })
      .catch(function (error) {
        console.log(error); // Log the error
        document.write(error); // Write the error to the document
        swal(error); // Show a basic error message with swal
        swal({
          title: "Advertencia",
          text: error,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }); // Show a more detailed error message with swal
      });
  }
  