//@flow
import * as React from 'react'

export default class ReactMicroList extends React.Component<{
  render: any => React.Node,
  data: Array<any>,
  loading: boolean,
  loadingComponent: React.Node,
  noResults: React.Node
}> {
  render() {
    const { data, render, noResults, loading, loadingComponent, ...rest } = this.props
    if (loading) {
      return loadingComponent
    }
    return data.length ? <div {...rest}>{data.map(render)}</div> : noResults ? noResults : null
  }
}
