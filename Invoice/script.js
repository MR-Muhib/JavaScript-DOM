const invoiceData = {
  title: "Invoice From Office Supplies",
  invoiceNumber: "INV-1001",
  date: "2023-10-01",
  dueDate: "2023-10-15",
  client: {
    name: "Jane Doe",
    address: "1234 Elm Street, Springfield, USA",
  },
  items: [
    {
      description: "Web Design Services",
      quantity: 10,
      unitPrice: 50,
    },
    {
      description: "Hosting (1 year)",
      quantity: 1,
      unitPrice: 100,
    },
    {
      description: "Domain Name (1 year)",
      quantity: 1,
      unitPrice: 10,
    },
    {
      description: "Service X",
      quantity: 1,
      unitPrice: 100,
    },
  ],
  notes: "Thank you for your business!",
};

function populateCommonItems() {
  document.getElementById("invoiceTitle").innerText = invoiceData.title;
  document.getElementById("invoiceNumber").innerText =
    invoiceData.invoiceNumber;
  document.getElementById("invoiceDate").textContent = invoiceData.date;
  document.getElementById("invoiceDueDate").textContent = invoiceData.dueDate;
  document.getElementById("clientName").textContent = invoiceData.client.name;
  document.getElementById("clientAddress").textContent =
    invoiceData.client.address;
  document.getElementById("invoiceNotes").textContent = invoiceData.notes;
}

function populateItems() {
  const itemsBody = document.getElementById("itemsBody");
  let grandTotal = 0;
  invoiceData.items.forEach((item) => {
    console.log(item);
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.description}</td>
                      <td>${item.quantity}</td>
                      <td>${item.unitPrice}</td>
                      <td>${item.quantity * item.unitPrice}</td>`;
    itemsBody.appendChild(row);
    grandTotal += item.quantity * item.unitPrice;

    document.getElementById(
      "grandTotal"
    ).innerHTML = `Grand Total: $${grandTotal}`;
  });
}

populateCommonItems();
populateItems();
