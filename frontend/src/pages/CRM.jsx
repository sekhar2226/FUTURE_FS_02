import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "http://127.0.0.1:8000/api/leads/";

function CRM() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    source: "Website",
    status: "New",
    notes: "",
  });

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get(API_URL);
      setLeads(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const addLead = async (e) => {
  e.preventDefault();

  console.log(form);

  try {
    const res = await axios.post(API_URL, form);

    console.log(res.data);

    setForm({
      name: "",
      email: "",
      phone: "",
      source: "Website",
      status: "New",
      notes: "",
    });

    fetchLeads();
    alert("Lead Added Successfully");
  } catch (err) {
    console.log(err.response?.data);
    console.log(err);
  }
};

  const deleteLead = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      fetchLeads();
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (lead, status) => {
    try {
      await axios.put(`${API_URL}${lead.id}/`, {
        ...lead,
        status,
      });

      fetchLeads();
    } catch (err) {
      console.log(err);
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === "New").length;
  const contactedLeads = leads.filter(
    (l) => l.status === "Contacted"
  ).length;
  const convertedLeads = leads.filter(
    (l) => l.status === "Converted"
  ).length;

  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        background: "#121212",
        color: "white",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#1e1e1e",
          padding: "20px",
        }}
      >
        <h3 className="mb-4 text-info">Mini CRM</h3>

        <ul className="list-unstyled">

  <li className="mb-3">
    <a href="#dashboard" className="text-white text-decoration-none">
      📊 Dashboard
    </a>
  </li>

  <li className="mb-3">
    <a href="#addlead" className="text-white text-decoration-none">
      👥 Leads
    </a>
  </li>

  <li className="mb-3">
    <a href="#analytics" className="text-white text-decoration-none">
      📈 Analytics
    </a>
  </li>

  <li className="mb-3">
    <button
      className="btn btn-danger btn-sm"
      onClick={() => window.location.reload()}
    >
      🚪 Logout
    </button>
  </li>

</ul>
      </div>

      {/* Main Content */}
      <div className="container-fluid p-4">

       <div id="dashboard">
  <h1>Client Lead Management System</h1>
</div>

        {/* Cards */}
        <div className="row mb-4">

          <div className="col-md-3">
            <div className="card bg-primary text-white">
              <div className="card-body">
                <h5>Total Leads</h5>
                <h2>{totalLeads}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-warning">
              <div className="card-body">
                <h5>New</h5>
                <h2>{newLeads}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-info text-white">
              <div className="card-body">
                <h5>Contacted</h5>
                <h2>{contactedLeads}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card bg-success text-white">
              <div className="card-body">
                <h5>Converted</h5>
                <h2>{convertedLeads}</h2>
              </div>
            </div>
          </div>

                </div>

        {/* Analytics */}
        <div
          id="analytics"
          className="card bg-dark text-white p-4 mb-4"
        >
          <h3>Analytics</h3>

          <div className="row text-center">

            <div className="col-md-4">
              <h4>{newLeads}</h4>
              <p>New Leads</p>
            </div>

            <div className="col-md-4">
              <h4>{contactedLeads}</h4>
              <p>Contacted Leads</p>
            </div>

            <div className="col-md-4">
              <h4>{convertedLeads}</h4>
              <p>Converted Leads</p>
            </div>

          </div>
        </div>

        {/* Add Lead */}
        <div
          id="addlead"
          className="card bg-dark text-white p-4 mb-4"
        >

          <h3>Add Lead</h3>

          <form onSubmit={addLead}>
            <input
              className="form-control mb-2"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              className="form-control mb-2"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              className="form-control mb-2"
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              className="form-control mb-2"
              placeholder="Source"
              name="source"
              value={form.source}
              onChange={handleChange}
            />

            <textarea
              className="form-control mb-2"
              placeholder="Notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
            />

            <button className="btn btn-success">
              Add Lead
            </button>
          </form>
        </div>

        {/* Search */}
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search by Name or Email"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {/* Lead Table */}
        <div className="card bg-dark text-white p-3">

          <h3>Lead Management</h3>

          <table className="table table-dark table-hover mt-3">

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Source</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredLeads.length === 0 && (
    <tr>
      <td colSpan="6" className="text-center">
        No Leads Found
      </td>
    </tr>
  )}

              {filteredLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.source}</td>

                  <td>
                    <select
                      className="form-select"
                      value={lead.status}
                      onChange={(e) =>
                        updateStatus(
                          lead,
                          e.target.value
                        )
                      }
                    >
                      <option>New</option>
                      <option>Contacted</option>
                      <option>Converted</option>
                    </select>
                  </td>

                  <td>
                    <button
  className="btn btn-danger btn-sm"
  onClick={() => {
    if (window.confirm("Delete this lead?")) {
      deleteLead(lead.id);
    }
  }}
>
  Delete
</button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        <div className="text-center mt-4 text-secondary">
  Mini CRM Dashboard | Developed by Basava Yagna Sekhar
</div>

      </div>
    </div>
  );
}

export default CRM;