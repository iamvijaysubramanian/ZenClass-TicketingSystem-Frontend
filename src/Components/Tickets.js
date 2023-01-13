import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { config } from "./config";

function Tickets() {
  const [ticketList, setTicketList] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [ticketId, setTicketId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tickets = await axios.get(`${config.api}/tickets`, {
          headers: {
            Authorization: localStorage.getItem("myreact"),
          },
        });
        setTicketList(tickets.data);
      } catch (error) {
        alert("Some thing went wrong");
      }
    };
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      queryTitle: "",
      queryLanguage: "",
      queryType:"",
      description:"",
      queryStatus:"",
    },
    onSubmit: async (values) => {
      try {
        if (!isEdit) {
          const ticket = await axios.post(`${config.api}/ticket`, values, {
            headers: {
              Authorization: localStorage.getItem("myreact"),
            },
          });
          setTicketList([...ticketList, { ...values, _id: ticket.data.id }]);
          formik.resetForm();
        } else {
          await axios.put(`${config.api}/ticket/${ticketId}`, values, {
            headers: {
              Authorization: localStorage.getItem("myreact"),
            },
          });
          const tIndex = ticketList.findIndex((t) => t._id == ticketId);
          ticketList[tIndex] = values;
          setTicketList([...ticketList]);
          formik.resetForm();
          setEdit(false);
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    },
  });

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`${config.api}/ticket/${id}`, {
        headers: {
          Authorization: localStorage.getItem("myreact"),
        },
      });
      const tIndex = ticketList.findIndex((t) => t.id == id);
      ticketList.splice(tIndex, 1);
      setTicketList([...ticketList]);
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  const editTicket = async (id) => {
    try {
      const ticket = await axios.get(`${config.api}/ticket/${id}`, {
        headers: {
          Authorization: localStorage.getItem("myreact"),
        },
      });
      formik.setValues(ticket.data);
      setTicketId(id);
      setEdit(true);
    } catch (error) {
      alert("Something went wrong");
    }
  };
  return (
    <>
        <div className="col-lg-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <label>QueryTitle</label>
                <input
                  type={"text"}
                  className="form-control"
                  name="queryTitle"
                  value={formik.values.queryTitle}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-lg-6">
                <label>QueryLanguage</label>
                <input
                  type={"text"}
                  className="form-control"
                  name="queryLanguage"
                  value={formik.values.queryLanguage}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-lg-6">
                <label>QueryType</label>
                <input
                  type={"text"}
                  className="form-control"
                  name="queryType"
                  value={formik.values.queryType}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-lg-6">
                <label>Description</label>
                <input
                  type={"text"}
                  className="form-control"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-lg-6">
                <label>QueryStatus</label>
                <input
                  type={"text"}
                  className="form-control"
                  name="queryStatus"
                  value={formik.values.queryStatus}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-6">
                <input
                  type={"submit"}
                  value={isEdit ? "Update" : "Submit"}
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">QueryTitle</th>
                <th scope="col">QueryLanguage</th>
                <th scope="col">QueryType</th>
                <th scope="col">Description</th>
                <th scope="col">QueryStatus</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {ticketList.map((ticket, index) => {
                return (
                  <tr>
                    <th scope="row">{ticket._id}</th>
                    <td>{ticket.queryTitle}</td>
                    <td>{ticket.queryLanguage}</td>
                    <td>{ticket.queryType}</td>
                    <td>{ticket.description}</td>
                    <td>{ticket.queryStatus}</td>
                    <td>
                      <button
                        onClick={() => editTicket(ticket._id)}
                        className="btn btn-info btn-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTicket(ticket._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      
    </>
  );
}

export default Tickets;
