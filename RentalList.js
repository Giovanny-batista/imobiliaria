// src/RentalList.js
import React from 'react';

function RentalList() {
  // Simulação de uma lista de aluguéis
  const rentals = [
    { id: 1, property: 'Casa 1', status: 'Pago' },
    { id: 2, property: 'Apartamento 2', status: 'Em atraso' },
    { id: 3, property: 'Casa 3', status: 'Pago' },
  ];

  return (
    <div>
      <h2>Lista de Aluguéis</h2>
      <table>
        <thead>
          <tr>
            <th>Propriedade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((rental) => (
            <tr key={rental.id}>
              <td>{rental.property}</td>
              <td>{rental.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RentalList;
