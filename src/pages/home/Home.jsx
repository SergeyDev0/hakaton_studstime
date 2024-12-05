import React from "react";
import Layout from "./../../components/layout/Layout";
import { Download, Import } from "lucide-react";
import arrowDown from "../../assets/arrowDown.svg";

const Home = () => {
  const [isOpenCompare, setIsCompare] = React.useState(false);
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
              <button
                className="section__button"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setIsCompare(true);
                }}
              >
                Сравнить расписания
              </button>
            </form>
            {isOpenCompare && (
              <div className="comparison-results">
                <div className="tableWrapper">
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
                </div>
                <div className="tableWrapper">
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
                </div>
              </div>
            )}
            {isOpenCompare && (
              <button className="section__button" onClick={(e) => {
                e.preventDefault();
                setIsCompare(false);
              }}>Закрыть</button>
            )}
          </section>
          <div className="tableWrapper">
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
          </div>
          <button className="button__download" id="export-button">
            <Download color="white" size={30} /> Экспортировать в XLSX
          </button>
          <button className="button__download" id="export-button">
            <Import color="white" size={30} /> Импортировать XLSX
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
                  <option value="option1">Николаенко Ксения Сергеевна</option>
                  <option value="option2">Родионов Владимир Иванович</option>
                  <option value="option3">Еременко Мария Петровна</option>
                  <option value="option4">Еремина Ирина Владимировна</option>
                  <option value="option5">Артемов Сергей Владимирович</option>
                  <option value="option6">Николаенко Ирина Данииловна</option>
                  <option value="option7">Буценко Елена Васильевна</option>
                  <option value="option8">Волошина Татьяна Карповна</option>
                  <option value="option9">Волков Владимир Викторович</option>
                  <option value="option10">
                    Секацкая Галина Александровна
                  </option>
                  <option value="option11">Сорокина Наталья Борисовна</option>
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
