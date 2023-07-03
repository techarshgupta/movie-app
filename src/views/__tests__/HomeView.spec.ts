import { describe, it, expect, vi } from 'vitest'
import axios from "axios";
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'
vi.mock('axios')

describe('HomeView', () => {
  const wrapper = mount(HomeView)
  it('renders properly', () => {
    expect(wrapper).toBeDefined();
  });

  it('getPagination', () => {
    wrapper.vm.currentPage = 1;
    wrapper.vm.totalPages = 10;
    const res = wrapper.vm.getPagination();
    expect(res).toStrictEqual([1,2,3,4,5])
  });
  
  it('getMovieTitles', async () => {
    axios.get.mockResolvedValue({
      data: [],
    })
    wrapper.vm.getMovieTitles();
    expect(axios.get).toHaveBeenCalledWith('https://jsonmock.hackerrank.com/api/movies/?page=1')
  });
  
  it('getMovieTitles with title', async () => {
    axios.get.mockResolvedValue({
      data: [],
    })
    wrapper.vm.search = 'test';
    wrapper.vm.getMovieTitles();
    expect(axios.get).toHaveBeenCalledWith("https://jsonmock.hackerrank.com/api/movies/search/?page=1&Title=test")
  });
});
