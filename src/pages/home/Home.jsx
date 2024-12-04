import React from "react";
import Layout from "./../../components/layout/Layout";
import { Download } from "lucide-react";
import arrowDown from "../../assets/arrowDown.svg";

const Home = () => {
  return (
    <Layout>
      <main className="main">
        <div className="table__wrapper">
          <section className="compare">
            <h2 className="section__title">Сравнение расписания</h2>
            <form>
              <div className="section__row">
                <div className="section__col">
                  <label htmlFor="group1">Группа 1:</label>
                  <input
                    className="section__input"
                    type="text"
                    id="group1"
                    name="group1"
                    placeholder="ИП-223"
                  />
                </div>
                <div className="section__col">
                  <label htmlFor="group1">Группа 2:</label>
                  <input
                    className="section__input"
                    type="text"
                    id="group2"
                    name="group2"
                    placeholder="ИП-224"
                  />
                </div>
              </div>
              <button className="section__button" type="submit">
                Сравнить расписания
              </button>
            </form>
            <div className="comparison-results"></div>
          </section>
          <table className="table">
            <thead>
              <tr>
                <th>Время</th>
                <th>Предмет</th>
                <th>Преподаватель</th>
                <th>Группа</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09:00 - 10:30</td>
                <td>Математика</td>
                <td>Преподаватель 1</td>
                <td>Группа 1</td>
              </tr>
              <tr>
                <td>09:00 - 10:30</td>
                <td>Математика</td>
                <td>Преподаватель 1</td>
                <td>Группа 1</td>
              </tr>
              <tr>
                <td>09:00 - 10:30</td>
                <td>Математика</td>
                <td>Преподаватель 1</td>
                <td>Группа 1</td>
              </tr>
              <tr>
                <td>09:00 - 10:30</td>
                <td>Математика</td>
                <td>Преподаватель 1</td>
                <td>Группа 1</td>
              </tr>
              <tr>
                <td>09:00 - 10:30</td>
                <td>Математика</td>
                <td>Преподаватель 1</td>
                <td>Группа 1</td>
              </tr>
            </tbody>
          </table>
          <button className="button__download" id="export-button">
            <Download color="white" size={30} /> Экспортировать в XLSX
          </button>
          <section className="statistics">
            <h2 className="section__title">Статистика для преподавателя</h2>
            <form className="statisctics-form" id="statisctics-form">
              <label htmlFor="group1">ФИО преподавателя</label>
              <div className="wrapperInput">
                <select 
                  className="statistics__select"
                  id="nameTeacher"
                  name="name"
                  defaultValue="none"
                >
                  <option disabled selected value="none">
                    Иванов Иван Иванович
                  </option>
                  <option value="option1">До 14 лет</option>
                  <option value="option1">14-16 лет</option>
                  <option value="option2">16-18 лет</option>
                  <option value="option2">От 18 лет</option>
                </select>
                <div className="inputArrow">
                  <img src={arrowDown} />
                </div>
              </div>
              <button className="section__button" type="submit">
                Получить статистику
              </button>
            </form>
            <div className="statistics-results"></div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
