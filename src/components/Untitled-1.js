 <thead>
            <tr>
              {data.map((row, k) => {
                return Object.keys(row).map((td, i) => <th key={i}>{td}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {data.map((row, i) => {
                return (
                  // setId(i)
                  Object.entries(row).map((td, id) => <td key={id}>{td[1]}</td>)
                )
              })}
              <td>
                {' '}
                <Link to={`/edit/2`} type='submit'>
                  Delete
                </Link>
              </td>
              <td>
                <Link to={`/delete/2`} type='submit'>
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>