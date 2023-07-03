import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest'
import FavouriteView from '../FavouriteView.vue'
describe("FavouriteView", () => {
  const wrapper = mount(FavouriteView)
  it('renders properly', () => {
    expect(wrapper).toBeDefined();
  })
  it("movie is added into local storage", () => {
    const mockId = "movie";
    const mockJson = [{"Title":"Waterworld","Year":1995,"imdbID":"tt0189200"},{"Title":"Waterworld","Year":2001,"imdbID":"tt0381702"}];
    localStorage.setItem(mockId, JSON.stringify(mockJson));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });

  it("movie remove from local storage", () => {
    const mockId = "movie";
    const mockJson = [{ "Title": "Waterworld", "Year": 1995, "imdbID": "tt0189200" }];
    // ts-ignore
    wrapper.vm.removeToFavourite({"Title":"Waterworld","Year":2001,"imdbID":"tt0381702"});
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });
});