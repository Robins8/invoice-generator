// script.js

document.getElementById('addItem').addEventListener('click', function() {
    const table = document.getElementById('items').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
  
    const descriptionCell = row.insertCell(0);
    const quantityCell = row.insertCell(1);
    const priceCell = row.insertCell(2);
  
    descriptionCell.innerHTML = `<input type="text" class="item-description" placeholder="Item description">`;
    quantityCell.innerHTML = `<input type="number" class="item-quantity" value="1">`;
    priceCell.innerHTML = `<input type="number" class="item-price" value="0">`;
  });
  
  document.getElementById('generateInvoice').addEventListener('click', function() {
    const clientName = document.getElementById('clientName').value;
    const invoiceNumber = document.getElementById('invoiceNumber').value;
    const date = document.getElementById('date').value;
  
    const itemDescriptions = document.getElementsByClassName('item-description');
    const itemQuantities = document.getElementsByClassName('item-quantity');
    const itemPrices = document.getElementsByClassName('item-price');
  
    const invoiceItemsTable = document.getElementById('invoiceItems');
    invoiceItemsTable.innerHTML = ''; 
  
    let totalAmount = 0;
  
    for (let i = 0; i < itemDescriptions.length; i++) {
      const description = itemDescriptions[i].value;
      const quantity = itemQuantities[i].value;
      const price = itemPrices[i].value;
      const total = quantity * price;
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${description}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td>${total.toFixed(2)}</td>
      `;
      invoiceItemsTable.appendChild(row);
  
      totalAmount += total;
    }
  
    document.getElementById('invoiceClientName').innerText = `Client: ${clientName}`;
    document.getElementById('invoiceNumberDisplay').innerText = `Invoice Number: ${invoiceNumber}`;
    document.getElementById('invoiceDate').innerText = `Date: ${date}`;
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
  
   
    document.getElementById('invoicePreview').style.display = 'block';
  });
  
  document.getElementById('printInvoice').addEventListener('click', function() {
    window.print(); 
  });
  